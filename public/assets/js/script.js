"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const setupMutuallyExclusiveCheckboxes = () => {
        const paresExclusivos = {
            "Moderno": "Tradicional",
            "Tradicional": "Moderno",
            "Sério": "Descontraído",
            "Descontraído": "Sério",
            "Popular": "Exclusivo",
            "Exclusivo": "Popular",
            "Sofisticado": "Simples",
            "Simples": "Sofisticado",
            "Tecnológico": "Artesanal",
            "Artesanal": "Tecnológico",
            "Minimalista": "Detalhado",
            "Detalhado": "Minimalista"
        };
        const checkboxes = document.querySelectorAll('input[name="caracteristicas"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const value = this.value;
                if (this.checked && paresExclusivos[value]) {
                    const opostoCheckbox = document.querySelector(`input[name="caracteristicas"][value="${paresExclusivos[value]}"]`);
                    if (opostoCheckbox) {
                        opostoCheckbox.checked = false;
                    }
                }
            });
        });
    };
    setupMutuallyExclusiveCheckboxes();
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
        const caracteristicas = Array.from(checkboxes)
            .map((checkbox) => checkbox.value)
            .join(", ");
        const numeroWhatsApp = "+5595991734840";
        const mensagem = `
            📌 *BRIEFING PARA CRIAÇÃO DE MARCA*  
                    
            🏢 *1. SOBRE SUA EMPRESA*
            • Nome da empresa: ${data.nome_empresa || "Não informado"}  
            • O que faz: ${data.descricao_empresa || "Não informado"}  
            • Missão, visão e valores: ${data.missao_visao_valores || "Não informado"}  
            • Como quer ser percebida: ${data.percepcao_mercado || "Não informado"}  
            • Definição em duas palavras: ${data.definicao || "Não informado"}  
            
            🎯 *2. SOBRE A IDENTIDADE DA MARCA*
            • Nome oficial da marca: ${data.nome_marca || "Não informado"}  
            • Slogan: ${data.slogan || "Não informado"}   
            • Mensagem principal: ${data.mensagem_positiva || "Não informado"}  
            • Mensagem a evitar: ${data.mensagem_negativa || "Não informado"}  
            
            👥 *3. PÚBLICO-ALVO*
            • Perfil dos clientes: ${data.publico || "Não informado"} 
            • Problemas/necessidades resolvidos: ${data.problemas_resolvidos || "Não informado"}  
            • Como o público descobre a marca: ${data.canais_descoberta || "Não informado"}  
            
            🏆 *4. CONCORRÊNCIA E DIFERENCIAIS*
            • Principais concorrentes: ${data.concorrentes || "Não informado"}  
            • Diferenciais: ${data.diferenciais || "Não informado"}  
            
            🎨 *5. PERSONALIDADE VISUAL DA MARCA*
            • Características selecionadas: ${caracteristicas || "Não informado"}  
            • Outras características desejadas: ${data.outras_caracteristicas || "Não informado"}
            • Preferências de cores: ${data.preferencia_cores || "Não informado"}  
            • Cores a evitar: ${data.cores_evitar || "Não informado"}  
            • Referências visuais: ${data.referencias_visuais || "Não informado"}  
            
            💬 *6. CONSIDERAÇÕES FINAIS*
            • Informações adicionais: ${data.informacoes_adicionais || "Não informado"}  
        `.trim();
        const url = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
        window.open(url, "_blank");
    });
});
