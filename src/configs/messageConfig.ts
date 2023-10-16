export default (t: number) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f7f7f7;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #ffffff;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
                background-color: #007bff;
                color: #ffffff;
                padding: 10px 0;
                text-align: center;
            }
            .content {
                padding: 20px;
            }
            .temperature {
                font-size: 24px;
                font-weight: bold;
                color: #f00;
            }
            .notice {
                font-size: 18px;
                margin-top: 20px;
            }
            .signature {
                margin-top: 40px;
                text-align: center;
                color: #888;
            }
        </style>
    </head>
    <body>
    <div class="container">
        <div class="header">
        <h1>Alerta de Temperatura e Umidade do Servidor</h1>
        </div>
        <div class="content">
        <p>Prezado Gestor,</p>
        <p class="notice">Gostaríamos de informar que a temperatura ou umidade do servidor atingiu níveis preocupantes:</p>
        <p class="temperature">Temperatura Atual: ${t}°C</p>
        <p class="notice">É altamente recomendado tomar medidas imediatas para resfriar o servidor e evitar danos.</p>
        <p class="signature">Atenciosamente,<br>Equipe de Tecnologia</p>
        </div>
    </div>
</body>
</html>

    `;
};
