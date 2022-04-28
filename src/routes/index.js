import { useState } from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom"

export default function AppRoutes(){

    const [formValues, setFormValues] = useState({nascionalidade: 'Brasileiro',estado_civil: 'Solteiro'});

  const handleInputChange = (e) => {
      const {name , value} = e.target;
      setFormValues({...formValues, [name]: value});
  };  

  const handleSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);


      console.log('*** handleSubmit', data);
  };

  console.log('*** formValues', formValues);

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element= 
        { <form onSubmit={handleSubmit}>


        <fieldset id="Usuario">
        <legend class="legend">Identificação do Usuário</legend>
        <br/>

      <input type="text" name="Nome" placeholder="Nome completo..." onChange={handleInputChange} value={formValues.nome}/>
      <input type="text" name="Cpf" placeholder="CPF" onChange={handleInputChange} value={formValues.cpf } />

      <select name="sexo" onChange={handleInputChange} value={formValues.sexo}>
        <option value="">--SELECIONE--</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
        <option value="O">Outro</option>
      </select>

      <div className="radios">
        <label>
          <input type="radio"  name="Nascionalidade" value="Brasileiro" onChange={handleInputChange} checked={formValues.nascionalidade == 'Brasileiro'} />Brasileiro
        </label>
        <label>
          <input type="radio"  name="Nascionalidade" value="Estrangeiro" onChange={handleInputChange} checked={formValues.nascionalidade == 'Estrangeiro'} />Estrangeiro
        </label>
      </div>

      <div className="radios">
        <label>
          <input type="radio"  name="Estado_civil" value="Solteiro" onChange={handleInputChange} checked={formValues.estado_civil == 'Solteiro'} />Solteiro
        </label>
        <label>
          <input type="radio"  name="Estado_civil" value="Casado" onChange={handleInputChange} checked={formValues.estado_civil == 'Casado'} />Casado
        </label>
        <label>
          <input type="radio"  name="Estado_civil" value="Divorciado" onChange={handleInputChange} checked={formValues.estado_civil == 'Divorciado'} />Divorciado
        </label>
        <label>
          <input type="radio"  name="Estado_civil" value="Viúvo (a)" onChange={handleInputChange} checked={formValues.estado_civil == 'Viúvo (a)'} />Viúvo (a)
        </label>
      </div>
      <h4>Nascimento:</h4>
      <input type="date" name="Nascimento" onChange={handleInputChange} value={formValues.nascimento} />


      </fieldset>

      <fieldset id="Endereço">
        <legend class="legend">Endereço do Usuário</legend>

        <input type="text" name="Cidade" placeholder="Sua Cidade..." onChange={handleInputChange} value={formValues.cidade}/>
      
        <select name="Estado"  onChange={handleInputChange} value={formValues.estado}>
         <option value="">--SELECIONE--</option>
          <option value="AC">Acre</option>
          <option value="AC">Acre</option>
          <option value="AL">Alagoas</option>
          <option value="AP">Amapá</option>
          <option value="AM">Amazonas</option>
          <option value="BA">Bahia</option>
          <option value="CE">Ceará</option>
          <option value="DF">Distrito Federal</option>
          <option value="ES">Espírito Santo</option>
          <option value="GO">Goiás</option>
          <option value="MA">Maranhão</option>
          <option value="MT">Mato Grosso</option>
          <option value="MS">Mato Grosso do Sul</option>
          <option value="MG">Minas Gerais</option>
          <option value="PA">Pará</option>
          <option value="PB">Paraíba</option>
          <option value="PR">Paraná</option>
          <option value="PE">Pernambuco</option>
          <option value="PI">Piauí</option>
          <option value="RJ">Rio de Janeiro</option>
          <option value="RN">Rio Grande do Norte</option>
          <option value="RS">Rio Grande do Sul</option>
          <option value="RO">Rondônia</option>
          <option value="RR">Roraima</option>
          <option value="SC">Santa Catarina</option>
          <option value="SP">São Paulo</option>
          <option value="SE">Sergipe</option>
          <option value="TO">Tocantins</option>
          <option value="EX">Estrangeiro</option>
      </select>

      <input type="number" name="nDaCasa" placeholder="número da casa / apt"  onChange={handleInputChange} value={formValues.numero_casa}/>
        
      <input type="text" name="Logradouro"  placeholder="Bairro"  onChange={handleInputChange} value={formValues.logradouro}/>


        </fieldset>


        <fieldset id="Atuacao">
        <legend class="legend">Ramo de Atuação</legend>

        <h5>Números de vinculos:</h5>
        <select  name="Empresa"  onChange={handleInputChange} value={formValues.empresa}>
          <option value="">--SELECIONE--</option>
          <option value="vinc1">1</option>
          <option value="vinc2">2</option>
          <option value="outrosvinc">3 ou mais</option>
          <option value="autonomo">Autonomo</option>
        </select>  

        <input type="text" name="Setor" size="30" placeholder="Razão Social" onChange={handleInputChange} value={formValues.setor}/>
      
        <h5>Carga Horária:</h5>
        <select name="cargahr" onChange={handleInputChange} value={formValues.carga_hr}>
          <option value="">--SELECIONE--</option>
          <option value="36h">36 horas semanais</option>
          <option value="20h">20 horas semanais</option>
          <option value="40h">40 horas semanais</option>  
          <option value="30h">30 horas semanais</option>
      </select>  

      <input type="number" name="Salario" placeholder="Salário Bruto (R$)"  onChange={handleInputChange} value={formValues.salario}/>
        

        </fieldset>

        <fieldset id="Declaracao">
        <legend class="legend">Declaração Anual</legend>

        <input type="number" name="RendAnual" placeholder="Rendimento Anual (R$)"  onChange={handleInputChange} value={formValues.rend_anual}/>
     
        <input type="number" name="Isencao" placeholder="Isenção" onChange={handleInputChange} value={formValues.isencao}/>

        <h5>Possui Imovel?</h5>
        <select  name="PossuiImovel" onChange={handleInputChange} value={formValues.possui_imovel}>
          <option value="sim">Sim</option>
          <option value="não">Não</option>
        </select>

        <input type="number" min="5000" name="ValorImovel" size="30" maxlength="40" placeholder="Valor do Imovel (R$)" onChange={handleInputChange} value={formValues.valor_imovel}/>
  
        <select name="Bens" onChange={handleInputChange} value={formValues.bens}>
        <option value="">--SELECIONE--</option>
          <option value="Carro">Carro</option>
          <option value="Moto">Moto</option>
          <option value="Terreno">Terreno</option>
        </select>

        <input type="number" min="5000" name="ValorBens" id="bens" size="35" maxlength="45" placeholder="Valor do Bem (R$)"/>

        </fieldset>


      <br/>

      <button type="submit" className='Deletar'>Deletar</button>
      <button type="submit" className='Atualizar'>Atualizar</button>
      <button type="submit" className='Enviar'>Enviar</button>
    </form>
        

        
        }/>
        <Route path="/sobre" element= {
            <div>
                <center>
            <div id="position">
            <div className='caixa2'>
            <div className='titulo' ><p>RECEITA FEDERAL</p></div>

            <br/>

            <div className="caixa">O órgão foi criado a partir da publicação do 
                <b>Decreto nº 63.659, de 20 de novembro de 1968</b>.
                A nova secretaria substituiu a Direção-Geral da Fazenda Nacional e transformou
                diversos departamentos existentes em coordenações (arrecadação, tributação,
                fiscalização e informações econômico-fiscais).
                A <u>Lei nº 11.457, de 16 de março de 2007</u>,
                mudou a denominação para Secretaria da Receita Federal do Brasil, na época chamada
                 de Super Receita, já que passara a englobar as estruturas de arrecadação
                e fiscalização dos ministérios da Fazenda e da Previdência Social. O intuito
                foi reorganizar a administração tributária federal objetivando a redução dos
                custos de manutenção de duas instituições distintas <s>(Secretaria da Receita 
                Federal e Secretaria da Receita Previdenciária, do Ministério da Previdência Social)
            </s>, melhorando as condições de fiscalização e arrecadação dos tributos controlados 
            pela União. Com a fusão, o governo mirava em aumentar a eficiência quanto ao combate à
            sonegação, diminuindo, dessa forma, a concorrência desleal, proporcionando o aumento da
            competitividade entre as empresas. 
            A Receita Federal, no modelo organizacional atual, <b>surgiu da Lei nº 13.844, de 18 de
                 junho de 2019</b>, conversão da Medida Provisória nº 870 de 1º de janeiro de 2019,
                 que agrupou quatro ministérios (Ministério da Fazenda, Ministério do Planejamento,
                 Desenvolvimento e Gestão, Ministério do Desenvolvimento, Indústria, 
                 Comércio Exterior e Serviços e Ministério do Trabalho) sob o grande guarda-chuva
                 do Ministério da Economia. E assim chegamos a denominação atual:
                 <u>Secretaria Especial da Receita Federal do Brasil.</u>
           
            
            
            <p>
                <i>O que faz a Receita Federal?</i>
                Relacionamos abaixo as competências da Receita Federal.
                <li>Administração dos tributos internos e do comércio exterior;</li>
                <li>Gestão e execução das atividades de arrecadação, lançamento, cobrança
                    administrativa, fiscalização, pesquisa e investigação fiscal e controle
                    da arrecadação administrada;</li>
                <li>Gestão e execução dos serviços de administração, fiscalização e controle
                    aduaneiro;</li>
                <li>Repressão ao contrabando e descaminho, no limite da sua alçada;</li>
                <li>Preparo e julgamento, em primeira instância, dos processos administrativos
                    de determinação e exigência de créditos tributários da União;</li>
                <li>Interpretação, aplicação e elaboração de propostas para o aperfeiçoamento
                    da legislação tributária e aduaneira federal;</li>
                <li>Subsídio à formulação da política tributária e aduaneira;</li>
                <li>Subsídio à elaboração do orçamento de receitas e benefícios tributários
                    da União;</li>
                <li>Interação com o cidadão por meio dos diversos canais de atendimento,
                    presencial ou a distância;</li>
                <li>Educação fiscal para o exercício da cidadania;</li>
                <li>Formulação e gestão da política de informações econômico-fiscais;</li>
                <li>Promoção da integração com órgãos públicos e privados afins, mediante
                    convênios para troca de informações, métodos e técnicas de ação fiscal e
                    para a racionalização de atividades, inclusive com a delegação de competência; e
                atuação na cooperação internacional e na negociação e implementação de acordos
                internacionais em matéria tributária e aduaneira.</li>
                Regra geral, a declaração do imposto de renda deve ser enviada à Receita Federal
                até o último dia útil de abril do ano seguinte ao que ocorreram os fatos geradores,
                ou seja, você entrega sua declaração no ano seguinte (exercício) ao ano que você 
                recebeu seus rendimentos (ano-calendário).
                As datas e horários para entrega da declaração são publicados, ano a ano, por
                meio de Instruções Normativas RFB, que tratam especificamente da forma de
                apresentação da declaração para cada ano.
                </p>
                <b>Confira a seguir os prazos de entrega para cada ano:</b>
                <br/>
                <li><s>2022: de 7 de março a 31 de maio de 2022 (ampliado em razão da pandemia da Covid-19);</s></li>
                <li>2021: de 1 de março a 31 de maio de 2021 (ampliado em razão da pandemia da Covid-19);</li>
                <li>2020: de 2 de março a 30 de junho de 2020 (ampliado em razão da pandemia da Covid-19);</li>
                <li>2019: de 7 de março a 30 de abril de 2019;</li>
                <li>2018: de 1º de março a 30 de abril de 2018;</li>
                </div>
                </div>
                </div>
                </center>
            </div>
        }/>
        <Route path="/quem-somos" element= {
        <div>

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9z6L-XEAY_wy-?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>NOME: André Luis Ferreira de Lima Júnior </h4>
                    <h4 className='infoIntegrantes'>RA: 202102668905</h4>              

            </div>   

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9yxvwXsAAYfML?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>NOME: Bruna Somera dos Santos</h4>
                    <h4 className='infoIntegrantes'>RA: 202103671608</h4>              

            </div>   

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9yh8HXIAQ6wlt?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>NOME: Gabriel Henrique Nascimento</h4>
                    <h4 className='infoIntegrantes'>RA: 201951532368</h4>              

            </div> 

            <br/>

            <div className='blocoIntegrantes'>
                <img className='fotointegrantes' src='https://pbs.twimg.com/media/FQ9yofYXsAEbL4t?format=png&name=small'/>

                    <h4 className='infoIntegrantes'>NOME: Leandro Lemos Ferreira da Silva</h4>
                    <h4 className='infoIntegrantes'>RA: 202103343091</h4>              

            </div>   

           
        </div>
        }/>
        </Routes>
           
        </BrowserRouter>
    );
    
}