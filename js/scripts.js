const experiences = {
    exp1: {
        titulo: 'Estágio na Companhia de Engenharia de Tráfego (CET) - Universidade corporativa',
        data: '06/2022 - 10/2023',
        descricao: 'Estagiei durante 1 ano e 4 meses na Companhia de Engenharia de Tráfego (CET), no setor da Gerencia da universidade Coorporativa. Eu fazia parte da pesquisa qualitativa e desenvolvia atividades como: organizar materiais, apostilas e equipamentos utilizados em atividades educacionais, efetuar preenchimento de formulários, fazer tabulação on-line e desenvolver planilhas digitais.'
    },
    exp2: {
        titulo: 'Jovem Aprendiz na FM Rodrigues & Cia Ltda - Iluminação Pública',
        data: '10/2023 - atual',
        descricao: 'Atualmente, estou trabalhando como Jovem Aprendiz na FM Rodrigues & Cia Ltda, no setor de Iluminação Pública, e fazendo um curso semanal de Técnicas Administrativas no SABER - Instituto Brasileiro de Aprendizagem. Minhas atividades desenvolvidas na empresa incluem: análise de dados, criação e desenvolvimento de planilhas em Excel, atendimento às equipes de campo, entre outras. As atividades desenvolvidas no curso incluem: desenvolvimento de slides, pesquisas online e apresentações de slides.'
    },
    exp3: {
        titulo: 'Experiência futura',
        data: '00/00 - 00/00',
        descricao: 'Espaço reservado para experiência profissional futura.'
    }
};

function showExperience(expKey) {
    const exp = experiences[expKey];
    document.getElementById('exp-titulo').textContent = exp.titulo;
    document.getElementById('exp-data').textContent = exp.data;
    document.getElementById('exp-descricao').textContent = exp.descricao;


    document.querySelectorAll('.experiencias-sidebar div').forEach(div => {
        div.classList.remove('highlight');
    });

    document.getElementById(`${expKey}-btn`).classList.add('highlight');
}


const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('nav-menu');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});