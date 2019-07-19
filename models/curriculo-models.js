const data = {
    title: 'Meu Currículo',
        name: ' Kátia Maciel Ramos',
        mobile: '(11) 94172-4144',
        email: 'katia.macielramos@outlook.com',
        profession: 'Desenvolvedor Web Front end',
        description: 'Graduada em Análise e Desenvolvimento de Sistemas foi onde tive a vivência em desenvolvimento de aplicações, desenvolvimento web e gerenciamento de projetos. Em constante busca de novos conhecimentos para o crescimento profissional e pessoal, experiência e facilidade em desenvolver trabalho em equipe, bom relacionamento e comunicação com pessoas. Vontade de desenvolver e adquirir mais experiências.',
        experience: [{
            company: 'Itaú Unibanco S.A.',
            time: '05/2010 à 06/2018',
            office: 'Agente de Atendimento',
            description: 'Suporte aos clientes Itaú Empresas na instalação e navegação ao sistema bancário de contas a pagar, contas a receber e configurações locais da máquina utilizada para correto funcionamento do sistema. Sempre atenta em identificar as necessidades dos clientes e apresentar soluções rápidas e eficientes visando a satisfação do cliente e qualidade no serviço. Controle de metas e resultados de acordo com quantidade de clientes atendidos e qualidade nos serviços prestados. Atuar junto com o time e áreas parceiras a fim de apresentar e implantar soluções e melhorias nos processos internos.'
        },
        {
            company: 'CETELEM PROMOTORA DE NEGÓCIOS LTDA',
            time: '05/2008 à 05/2010',
            office: 'Auxiliar de Cobrança',
            description: 'Gestão de carteira de clientes com débitos em aberto junto a financeira. Elaboração e apresentação de propostas para regularização de débitos. Negociação com clientes mediante contato telefônico e apresentar propostas que atenda os cliente e metas da empresa. Controle de qualidade no serviço e entrega de metas e resultados. Suporte ao time na obtenção de metas.'
        }],
        education:[{
            institution:'Universidade Cidade de São Paulo',
            description: 'Pós-Graduação em Desenvolvimento Full Stack Developer',
            conclusion: 'Novembro de 2020'
        },
        {
            institution:'Universidade Cidade de São Paulo',
            description: 'Superior de tecnologia em Análise e Desenvolvimento de Sistemas',
            conclusion: 'Dezembro de 2017' 
        },
        {
            institution: 'Universidade de Mogi das Cruzes',
            description: 'Bacharel em Administração',
            conclusion: 'Dezembro de 2014'
        }],
        language: [{
            course: 'Inglês',
            level: 'Nível avançado',
            institution: 'International Language Academy of Canada',
        }],
        skills: ['/images/logo_git.png', 
                '/images/logo_github.png', 
                '/images/logo_html5.png', 
                '/images/logo_css3.png', 
                '/images/logo_javascript.png', 
                '/images/logo_nodejs.png', 
                '/images/logo_sql.png', 
                '/images/logo_mysql.png']
}

module.exports = data;