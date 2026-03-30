{/* FUNÇÃO PARA ABRIR O LINK DO WHATSAPP COM A MENSAGEM PRÉ-ESCRITA E VARIÁVEIS NECESSÁRIAS */}
    const handleWhatsAppClick = () => {
    const ddd = "55";
    const prefixo = "31";
    const numero = "982876410";
    const msg = encodeURIComponent("Hey! Quero aprender inglês de verdade!");
    window.open(`https://wa.me/${ddd}${prefixo}${numero}?text=${msg}`, "_blank");
};

export { handleWhatsAppClick };