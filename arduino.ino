#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <DHT.h>
#include <LiquidCrystal.h>

#define DHTPIN 2
#define DHTTYPE DHT22

DHT dht(DHTPIN, DHTTYPE);
LiquidCrystal lcd(8, 9, 4, 5, 6, 7);

const char* ssid = "seu_ssid";
const char* password = "sua_senha";

float temperaturaLimiteSuperior = 28.0;
float temperaturaLimiteInferior = 18.0;

unsigned long lastRequestTime = 0;
const unsigned long requestInterval = 3600000;

void setup() {
  Serial.begin(115200);
  dht.begin();
  lcd.begin(16, 2);
  lcd.clear();
  lcd.print("Umidade:     %");
  lcd.setCursor(0, 1);
  lcd.print("Temp:     C");
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Conectando à rede Wi-Fi...");
  }
  Serial.println("Conexão Wi-Fi estabelecida");
}

void loop() {
  unsigned long currentTime = millis();

  if (currentTime - lastRequestTime >= requestInterval) {
    lastRequestTime = currentTime;

    float humidity = dht.readHumidity();
    float temperature = dht.readTemperature();

    if (isnan(humidity) || isnan(temperature)) {
      Serial.println("Erro ao ler o sensor DHT!");
      return;
    }

    if (temperature > temperaturaLimiteSuperior || temperature < temperaturaLimiteInferior) {
      String jsonBody = "{\"temperatura\":" + String(temperature) + ",\"umidade\":" + String(humidity) + "}";

      HTTPClient http;
      http.begin("https://api-arduino.netlify.app/");
      http.addHeader("Content-Type", "application/json");
      http.addHeader("hash", "c4dbfa8fcd8ec8e0b5e84ffc3037ce113d868e55");

      int httpResponseCode = http.POST(jsonBody);

      if (httpResponseCode > 0) {
        Serial.print("Resposta do servidor: ");
        Serial.println(httpResponseCode);
      } else {
        Serial.print("Erro na requisição: ");
        Serial.println(httpResponseCode);
      }

      http.end();
    }
  }

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (!isnan(humidity) && !isnan(temperature)) {
    lcd.setCursor(9, 0);
    lcd.print(humidity);
    
    lcd.setCursor(6, 1);
    lcd.print(temperature);
  }

  delay(5000);
}
