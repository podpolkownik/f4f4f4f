import React from 'react';

function Crypto() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Новый пик в $180 тыс. и альтсезон — прогнозы аналитиков</h1>

        <section className="mb-8">
          <div className="relative w-full" style={{ paddingBottom: '100%' }}>
            <img
              src=""
              alt="Bitcoin Growth"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          
          <p className="text-lg leading-relaxed mb-4">
            Криптовалютная аналитическая компания Cryptorank предсказывает значительный рост биткоина, предполагая, что его пик может быть достигнут 
            в октябре 2025 года. Этот прогноз опирается на исторические данные о циклах роста биткоина, которые происходили после крупных экономических 
            и политических событий, таких как выборы в США. Мнение о достижении $500 тыс. за один биткоин, если США примет его в резерв, также поддержал 
            Майк Новограц, глава Galaxy Digital.
          </p>

          <p className="text-lg leading-relaxed mb-4">
            Аналитики также прогнозируют альтсезон в 2025 году — период, когда цены на альтернативные криптовалюты будут расти вместе с биткоином. 
            При таком росте, биткоин, как ожидается, достигнет новых высот, включая целевой уровень в $180 тыс. от VanEck. Инвесторы, уверенные 
            в будущем криптовалют, видят в этом возможность, которая может принести до 1000% доходности на горизонте ближайших лет.
          </p>
        </section>
      </article>
    </div>
  );
}

export default Crypto;
