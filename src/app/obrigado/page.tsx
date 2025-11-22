'use client';

import { useEffect } from 'react';
import { CheckCircle, Mail, BookOpen } from 'lucide-react';

export default function ObrigadoPage() {
  useEffect(() => {
    // Simulação do envio de e-mail de boas-vindas
    // Em produção, isso seria um webhook ou API call
    console.log('Enviando e-mail de boas-vindas para o aluno...');
    console.log('Link da plataforma: https://plataforma.vektoridiomas.com/curso-ingles-juridico');
    console.log('Instruções de primeiro acesso incluídas no e-mail.');
  }, []);

  return (
    <div className="min-h-screen bg-[var(--cinza-claro)] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <header className="bg-[var(--azul-marinho)] text-white py-6 px-8 rounded-t-lg">
          <h1 className="text-2xl font-bold">Vektor Idiomas</h1>
        </header>

        {/* Conteúdo Principal */}
        <div className="bg-white p-12 rounded-b-lg shadow-lg">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-[var(--azul-marinho)] mb-4">
              Parabéns! Sua matrícula foi confirmada.
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Seu acesso completo será enviado por e-mail em até 5 minutos.
            </p>
          </div>

          <div className="bg-[var(--cinza-claro)] p-6 rounded-lg mb-8">
            <div className="flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-[var(--laranja-queimado)] mr-3" />
              <span className="text-lg font-semibold">E-mail de Boas-vindas</span>
            </div>
            <p className="text-gray-700 mb-4">
              Em breve você receberá um e-mail com:
            </p>
            <ul className="text-left space-y-2 text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                Link para a plataforma interativa do curso
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                Instruções completas de primeiro acesso
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                Cronograma das 8 semanas do curso
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                Materiais complementares
              </li>
            </ul>
          </div>

          <div className="bg-[var(--azul-marinho)] text-white p-6 rounded-lg">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-[var(--ciano)] mr-3" />
              <span className="text-lg font-semibold">Próximos Passos</span>
            </div>
            <ol className="text-left space-y-3">
              <li className="flex items-start">
                <span className="bg-[var(--ciano)] text-[var(--azul-marinho)] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                <span>Verifique sua caixa de entrada (e spam)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[var(--ciano)] text-[var(--azul-marinho)] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                <span>Clique no link da plataforma</span>
              </li>
              <li className="flex items-start">
                <span className="bg-[var(--ciano)] text-[var(--azul-marinho)] rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                <span>Complete seu cadastro e comece a aprender</span>
              </li>
            </ol>
          </div>

          {/* GOOGLE ADS CONVERSION PIXEL PLACEHOLDER */}
          {/*
          GOOGLE ADS CONVERSION PIXEL PLACEHOLDER
          Insira aqui o snippet de conversão do Google Ads
          Exemplo:
          <script>
            gtag('event', 'conversion', {
              'send_to': 'AW-XXXXXXXXX/XXXXXXXXX',
              'value': 1997.00,
              'currency': 'BRL'
            });
          </script>
          FIM DO GOOGLE ADS CONVERSION PIXEL PLACEHOLDER
          */}
        </div>

        {/* Footer */}
        <footer className="mt-8 text-gray-500 text-sm">
          <p>Dúvidas? Entre em contato: suporte@vektoridiomas.com</p>
        </footer>
      </div>
    </div>
  );
}