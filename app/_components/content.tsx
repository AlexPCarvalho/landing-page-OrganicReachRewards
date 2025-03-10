const Content = () => {
  return (
    <div className="m-10">
      <div className="text-5xl font-bold text-center text-lime-700">
        <h1>OrganicReach</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 ml-3 ">
        <div className="md:w-1/2 text-lg md:text-xl text-lime-900 font-bold indent-10 text-center md:text-left">
          <p>
            O OrganicReach ajuda os estabelecimentos a crescer naturalmente,
            conectando marcas e clientes por meio do engajamento nas mídias
            sociais.
          </p>
          <p>
            Ele funciona como um programa de fidelidade moderno: ao postar
            posts, stories ou reels no Instagram marcando o local, os clientes
            acumulam pontos. Quando atingem a meta definida pelo
            estabelecimento, recebem recompensas exclusivas.
          </p>
          <p>
            Isso incentiva a publicidade autêntica e espontânea, atraindo mais
            clientes sem a necessidade de investir em tráfego pago.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/card-instagram.gif"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            alt="Card Instagram"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 ml-3 ">
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/card-coffee.gif"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            alt="Card Coffee"
          />
        </div>
        <div className="md:w-1/2 text-lg md:text-xl text-lime-900 font-bold indent-10 text-center md:text-left">
          <p>
            Vender mais para clientes fiéis custa menos do que atrair novos
            compradores – e os números provam isso. Mas a fidelidade vai além de
            economizar dinheiro: ela fortalece a credibilidade do seu negócio.
          </p>
          <p>
            Ter uma base de clientes recorrentes é um sinal claro de que seus
            produtos ou serviços estão conquistando e encantando-os.
          </p>
          <p>
            Isso significa que, mesmo diante da concorrência, seus clientes
            escolhem ficar com você.
          </p>
          E a melhor parte? Clientes fiéis não apenas retornam, mas também se
          tornam promotores espontâneos da sua marca, compartilhando avaliações
          positivas e impulsionando seus resultados.
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 ml-3 ">
        <div className="md:w-1/2 text-lg md:text-xl text-lime-900 font-bold indent-10 text-center md:text-left">
          <p>
            Brindes proporcionais ao consumo, programas de fidelidade,
            benefícios exclusivos… Esses sistemas são amplamente utilizados
            porque ativam gatilhos psicológicos poderosos que impulsionam o
            engajamento e a lealdade dos clientes.
          </p>
          <p>
            Pertencimento – Quando os clientes se sentem parte de um grupo
            seleto, com acesso a experiências exclusivas e tratamento
            diferenciado, a conexão emocional com a marca se fortalece.
          </p>
          <p>
            Recompensa – A combinação entre emoção e razão: o cliente percebe
            valor no que investe, sabendo que seus esforços serão reconhecidos
            com benefícios ou prêmios.
          </p>
          <p>
            Progresso – A motivação de acompanhar uma jornada e alcançar uma
            meta, seja para atingir um novo status dentro do programa ou
            conquistar a recompensa desejada.
          </p>
          <p>
            Esses gatilhos não apenas incentivam compras recorrentes, mas criam
            um vínculo duradouro entre a marca e o cliente, transformando
            consumo em experiência e fidelidade em crescimento sustentável.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/card-salon.gif"
            className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl rounded-2xl shadow-lg"
            alt="Card Salon"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
