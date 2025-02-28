document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("briefingForm") as HTMLFormElement;

    if (!form) return;

    
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data: Record<string, string> = {};


        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        // Coletar as características da marca selecionadas
        const checkboxes = document.querySelectorAll<HTMLInputElement>('input[name="caracteristicas"]:checked');
        const caracteristicas = Array.from(checkboxes).map((checkbox) => checkbox.value).join(", ");

        // Número de WhatsApp no formato internacional
        const numeroWhatsApp = "5511999999999";

        // Criar a mensagem formatada
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

        // Criar URL para envio via WhatsApp
        const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;

        // Abrir WhatsApp com a mensagem preenchida
        window.open(url, "_blank");
    });
});
