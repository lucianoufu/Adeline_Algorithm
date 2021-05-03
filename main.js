let x = [[0.4329, -1.3719, 0.7022, -0.8535]
    ,[0.3024, 0.2286, 0.8630, 2.7909]
    ,[0.1349, -0.6445, 1.0530, 0.5687]
    ,[0.3374, -1.7163, 0.3670, -0.6283]
    ,[1.1434, -0.0485, 0.6637, 1.2606]
    ,[1.3749, -0.5071, 0.4464, 1.3009]
    ,[0.7221, -0.7587, 0.7681, -0.5592]
    ,[0.4403, -0.8072, 0.5154, -0.3129]
    ,[-0.5231, 0.3548, 0.2538, 1.5776]
    ,[0.3255, -2.0000, 0.7112, -1.1209]
    ,[0.5824, 1.3915, -0.2291, 4.1735]
    ,[0.1340, 0.6081, 0.4450, 3.2230]
    ,[0.1480, -0.2988, 0.4778, 0.8649]
    ,[0.7359, 0.1869, -0.0872, 2.3584]
    ,[0.7115, -1.1469, 0.3394, 0.9573]
    ,[0.8251, -1.2840, 0.8452, 1.2382]
    ,[0.1569, 0.3712, 0.8825, 1.7633]
    ,[0.0033, 0.6835, 0.5389, 2.8249]
    ,[0.4243, 0.8313, 0.2634, 3.5855]
    ,[1.0490, 0.1326, 0.9138, 1.9792]
    ,[1.4276, 0.5331, -0.0145, 3.7286]
    ,[0.5971, 1.4865, 0.2904, 4.6069]
    ,[0.8475, 2.1479, 0.3179, 5.8235]
    ,[1.3967, -0.4171, 0.6443, 1.3927]
    ,[0.0044, 1.5378, 0.6099, 4.7755]
    ,[0.2201, -0.5668, 0.0515, 0.7829]
    ,[0.6300, -1.2480, 0.8591, 0.8093]
    ,[-0.2479, 0.8960, 0.0547, 1.7381]
    ,[-0.3088, -0.0929, 0.8659, 1.5483]
    ,[-0.5180, 1.4974, 0.5453, 2.3993]
    ,[0.6833, 0.8266, 0.0829, 2.8864]
    ,[0.4353, -1.4066, 0.4207, -0.4879]
    ,[-0.1069, -3.2329, 0.1856, -2.4572]
    ,[0.4662, 0.6261, 0.7304, 3.4370]
    ,[0.8298, -1.4089, 0.3119, 1.3235]];
let t = [1.0, -1.0, -1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, -1.0, 1.0, 1.0, 1.0, -1.0, -1.0, -1.0];

let w_ant = [Math.random(), Math.random(), Math.random(), Math.random()];
let b_ant = Math.random();
let w_novo = w_ant;
let b_novo = b_ant;
let teta = 0;
let alfa = 0.1;
let erro_quadratico_novo = 0;
let erro_quadratico_ant  = 0;
let erro = 1;
let erro_novo = 0;
let erro_ant  = 0;
let ciclos = 0;
console.log(`Pessos iniciais: w1 ${w_ant[0]}, w2 ${w_ant[1]}, w3 ${w_ant[2]}, w4 ${w_ant[3]}, b_ant: ${b_ant}`)

function fn_atualiza_tabela_42(treinamento, estado)
{
    if(estado == "ant")
    {
        document.getElementById(`Coluna0_linha${treinamento}`).innerText  = `T${treinamento}`
        document.getElementById(`Coluna1_linha${treinamento}`).innerText  = b_ant 
        document.getElementById(`Coluna2_linha${treinamento}`).innerText  = w_ant[0] 
        document.getElementById(`Coluna3_linha${treinamento}`).innerText  = w_ant[1] 
        document.getElementById(`Coluna4_linha${treinamento}`).innerText  = w_ant[2] 
        document.getElementById(`Coluna5_linha${treinamento}`).innerText  = w_ant[3] 
    }
    else
    {
        document.getElementById(`Coluna6_linha${treinamento}`).innerText  = b_novo 
        document.getElementById(`Coluna7_linha${treinamento}`).innerText  = w_novo[0] 
        document.getElementById(`Coluna8_linha${treinamento}`).innerText  = w_novo[1] 
        document.getElementById(`Coluna9_linha${treinamento}`).innerText  = w_novo[2] 
        document.getElementById(`Coluna10_linha${treinamento}`).innerText  = w_novo[3] 
        document.getElementById(`Coluna11_linha${treinamento}`).innerText  = ciclos 
    }
}

function fn_atualiza_tabela_teste(treinamento)
{
    for(linha = 0; linha < 15; linha++)
    {
        x0 = parseFloat(document.getElementById(`Teste_Coluna0_linha${linha}`).innerText);
        x1 = parseFloat(document.getElementById(`Teste_Coluna1_linha${linha}`).innerText);
        x2 = parseFloat(document.getElementById(`Teste_Coluna2_linha${linha}`).innerText);
        x3 = parseFloat(document.getElementById(`Teste_Coluna3_linha${linha}`).innerText);
        
        
        
        y = w_novo[0] * x0 + w_novo[1] * x1 + w_novo[2] * x2 + w_novo[3] * x3 + b_novo

        document.getElementById(`Teste_Coluna${parseFloat(treinamento)+4}_linha${linha}`).innerText = y
    }
    
}

function fn_gera_rede(treinamento)
{
    fn_atualiza_tabela_42(treinamento, "ant")
    while (true)
    {
        ciclos += 1;
        console.log(`Ciclos: ${ciclos}`);
        for(entrada = 0; entrada < 35; entrada++)
        {
            let y_liquido = w_ant[0] * x[entrada][0] + w_ant[1] * x[entrada][1] + w_ant[2] * x[entrada][2] + w_ant[3] * x[entrada][3];
            let y = y_liquido;
            erro_quadratico_novo += (t[entrada] - y)**2;
            w_novo[0] = w_ant[0] + alfa * (t[entrada] - y) * x[entrada][0];
            w_novo[1] = w_ant[1] + alfa * (t[entrada] - y) * x[entrada][1];
            w_novo[2] = w_ant[2] + alfa * (t[entrada] - y) * x[entrada][2];
            w_novo[3] = w_ant[3] + alfa * (t[entrada] - y) * x[entrada][3];
            b_novo = b_ant + alfa + (t[entrada] - y);
        }
        /* console.log(`Erro quadratico ant: ${erro_quadratico_ant} \tErro quadratico novo: ${erro_quadratico_novo} \tErro: ${erro_quadratico_novo - erro_quadratico_ant}`); */
        erro_novo = erro_quadratico_novo - erro_quadratico_ant;
        erro = Math.abs(erro_novo - erro_ant);
        erro_ant = erro_novo;
        /* console.log(`Erro: ${erro}`); */
        erro_quadratico_ant = erro_quadratico_novo;
        if (erro <= 0.000001)
        {
            console.log(`Pessos finais: w1 ${w_novo[0]}, w2 ${w_novo[1]}, w3 ${w_novo[2]}, w4 ${w_novo[3]}, b_novo: ${b_novo} \nCiclos: ${ciclos+1}`)
            fn_atualiza_tabela_42(treinamento, "novo")
            fn_atualiza_tabela_teste(treinamento)
            erro_quadratico_novo = 0;
            erro_quadratico_ant  = 0;
            erro = 1;
            erro_novo = 0;
            erro_ant  = 0;
            ciclos = 0;
            w_ant = [Math.random(), Math.random(), Math.random(), Math.random()];
            b_ant = Math.random();
            w_novo = w_ant;
            b_novo = b_ant;
            break;
        }
    }
}

for (i = 0; i<5; i++)
    fn_gera_rede(i)
