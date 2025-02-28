"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("briefingForm");
    if (!form)
        return;
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });
        const checkboxes = document.querySelectorAll('input[name="caracteristicas"]:checked');
        const caracteristicas = Array.from(checkboxes).map((checkbox) => checkbox.value).join(", ");
        const numeroWhatsApp = "5511999999999";
        const mensagem = `
            📌 *Novo Briefing Recebido*  
                    
            🏢 *Empresa:* ${data.empresa || "Não informado"}  
            📝 *Definição:* ${data.definicao || "Não informado"}  
            📛 *Texto Assinado:* ${data.texto_assinado || "Não informado"}  
            📢 *Slogan:* ${data.slogan || "Não informado"}   
            ✅ *Mensagem Positiva:* ${data.mensagem_positiva || "Não informado"}  
            ❌ *Mensagem Negativa:* ${data.mensagem_negativa || "Não informado"}  
            👥 *Clientes:* ${data.publico || "Não informado"} 
            🏆 *Concorrentes:* ${data.concorrentes || "Não informado"}  
            🚀 *Diferenciais:* ${data.diferenciais || "Não informado"}  
            🎨 *Características da Marca:* ${caracteristicas || "Não informado"}  
            🖋 *Outras Características:* ${data.outras_caracteristicas || "Não informado"}  
            💬 *Informações Adicionais:* ${data.informacoes_adicionais || "Não informado"}  
        `.trim();
        const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    });
});
