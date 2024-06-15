export function exibirSetor(e, setor, setSetor) {
    const aetorSelecionada = e.target.value;

    if (!setor.includes(aetorSelecionada)) {
        setSetor([...setor, aetorSelecionada]);
    }
}
