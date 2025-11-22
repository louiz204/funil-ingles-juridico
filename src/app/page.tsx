'use client';

import { useState, useEffect } from 'react';
import { Clock, BookOpen, Globe, Award, Users, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 24, minutes: 0, seconds: 0 }; // Reset
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-[var(--azul-marinho)] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vektor Idiomas</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#sobre" className="hover:text-[var(--ciano)]">Sobre</a>
            <a href="#oferta" className="hover:text-[var(--ciano)]">Oferta</a>
            <a href="#contato" className="hover:text-[var(--ciano)]">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[var(--azul-marinho)] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Chega de Perder Oportunidades: Domine o Inglês Jurídico em 8 Semanas.
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-[var(--cinza-claro)]">
            Transforme sua carreira jurídica com o método exclusivo da Vektor Idiomas
          </p>
        </div>
      </section>

      {/* Dor Section */}
      <section className="py-20 px-6 bg-[var(--cinza-claro)]">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-[var(--azul-marinho)]">
            Você Está Perdendo Estas Oportunidades?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <BookOpen className="w-16 h-16 text-[var(--laranja-queimado)] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-4">Acesso a Artigos Científicos</h4>
              <p className="text-gray-600">
                Sem domínio do inglês jurídico, você fica excluído de milhares de artigos e pesquisas essenciais para sua carreira.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Globe className="w-16 h-16 text-[var(--laranja-queimado)] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-4">Dificuldade em Intercâmbios</h4>
              <p className="text-gray-600">
                Programas internacionais de intercâmbio e estágios ficam fora do seu alcance por barreiras linguísticas.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <Award className="w-16 h-16 text-[var(--laranja-queimado)] mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-4">Medo da OAB/Mestrado</h4>
              <p className="text-gray-600">
                A ansiedade de provas internacionais e mestrados em inglês prejudica seu desempenho e oportunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-[var(--azul-marinho)]">Quem Confia na Vektor</h3>
          <div className="flex justify-center items-center mb-8">
            <Users className="w-12 h-12 text-[var(--laranja-queimado)] mr-4" />
            <span className="text-2xl font-bold text-[var(--azul-marinho)]">+2.000 alunos formados</span>
          </div>
          <div className="grid md:grid-cols-4 gap-8 opacity-60">
            {/* Placeholder para logos de universidades */}
            <div className="bg-gray-200 p-8 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">USP</span>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">UNICAMP</span>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">FGV</span>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 font-semibold">PUC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Oferta */}
      <section className="py-20 px-6 bg-[var(--cinza-claro)]">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-[var(--azul-marinho)]">
            O ÚNICO curso 100% focado no seu sucesso na carreira jurídica
          </h3>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Método exclusivo desenvolvido por especialistas em direito e linguística</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Acesso vitalício à plataforma interativa</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>8 semanas intensivas com exercícios práticos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span>Suporte personalizado e comunidade de alunos</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Preço e Timer */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 text-[var(--azul-marinho)]">
            Oferta Limitada - Economize R$ 367,00
          </h3>
          <div className="bg-[var(--azul-marinho)] text-white p-8 rounded-lg mb-8">
            <div className="flex justify-center items-center mb-6">
              <Clock className="w-8 h-8 text-[var(--ciano)] mr-3" />
              <span className="text-xl">Oferta expira em:</span>
            </div>
            <div className="flex justify-center space-x-4 text-3xl font-bold">
              <div className="bg-[var(--ciano)] px-4 py-2 rounded">
                {timeLeft.hours.toString().padStart(2, '0')}h
              </div>
              <div className="bg-[var(--ciano)] px-4 py-2 rounded">
                {timeLeft.minutes.toString().padStart(2, '0')}m
              </div>
              <div className="bg-[var(--ciano)] px-4 py-2 rounded">
                {timeLeft.seconds.toString().padStart(2, '0')}s
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="border-2 border-gray-300 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">12x de R$ 197,00</h4>
              <p className="text-gray-600">Total: R$ 2.364,00</p>
            </div>
            <div className="border-4 border-[var(--ciano)] p-6 rounded-lg bg-[var(--cinza-claro)]">
              <h4 className="text-xl font-semibold mb-4 text-[var(--azul-marinho)]">À vista: R$ 1.997,00</h4>
              <p className="text-green-600 font-semibold">Economize R$ 367,00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Sticky */}
      <div className="fixed bottom-0 left-0 right-0 bg-[var(--azul-marinho)] text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-center">
          <a
            href="/checkout"
            className="bg-[var(--ciano)] hover:bg-[var(--azul-marinho)] text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg"
          >
            QUERO MINHA VAGA AGORA (e economizar R$ 367)
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[var(--azul-marinho)] text-white py-8 px-6 mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Vektor Idiomas. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}