'use client';

import { useState } from 'react';
import { CreditCard, Shield, Lock } from 'lucide-react';

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<'installments' | 'full'>('full');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de processamento de pagamento
    // Em produção, isso seria integrado com um gateway de pagamento
    console.log('Processando pagamento...', formData, paymentMethod);

    // Simular sucesso e redirecionar
    setTimeout(() => {
      window.location.href = '/obrigado';
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-[var(--cinza-claro)]">
      {/* Header */}
      <header className="bg-[var(--azul-marinho)] text-white py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-center">
          <h1 className="text-2xl font-bold">Vektor Idiomas</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulário de Pagamento */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-[var(--azul-marinho)]">
              Finalizar Compra
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dados Pessoais */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Dados Pessoais</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--ciano)] focus:border-transparent"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">E-mail</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--ciano)] focus:border-transparent"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              {/* Método de Pagamento */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Método de Pagamento</h3>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="full"
                      checked={paymentMethod === 'full'}
                      onChange={() => setPaymentMethod('full')}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">À vista: R$ 1.997,00</div>
                      <div className="text-sm text-green-600">Economize R$ 367,00</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="payment"
                      value="installments"
                      checked={paymentMethod === 'installments'}
                      onChange={() => setPaymentMethod('installments')}
                      className="mr-3"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">12x de R$ 197,00</div>
                      <div className="text-sm text-gray-600">Total: R$ 2.364,00</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Dados do Cartão */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Dados do Cartão
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Número do Cartão</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--ciano)] focus:border-transparent"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Validade</label>
                      <input
                        type="text"
                        name="expiry"
                        placeholder="MM/AA"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--ciano)] focus:border-transparent"
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">CVV</label>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="123"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--ciano)] focus:border-transparent"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--ciano)] hover:bg-[var(--azul-marinho)] text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors duration-300 shadow-lg"
              >
                Finalizar Compra
              </button>
            </form>
          </div>

          {/* Resumo da Compra */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[var(--azul-marinho)]">
                Resumo da Compra
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Curso: Inglês Jurídico para Estudantes de Direito</span>
                </div>
                <div className="flex justify-between">
                  <span>Duração: 8 semanas</span>
                </div>
                <div className="flex justify-between">
                  <span>Acesso: Vitalício</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-[var(--azul-marinho)]">
                    {paymentMethod === 'full' ? 'R$ 1.997,00' : 'R$ 2.364,00'}
                  </span>
                </div>
                {paymentMethod === 'installments' && (
                  <div className="text-sm text-gray-600">
                    12x de R$ 197,00
                  </div>
                )}
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <div className="flex items-center mb-3">
                <Shield className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-semibold text-green-800">Pagamento Seguro</span>
              </div>
              <p className="text-sm text-green-700">
                Seus dados estão protegidos com criptografia SSL de 256 bits.
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <div className="flex items-center mb-3">
                <Lock className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-blue-800">Privacidade Garantida</span>
              </div>
              <p className="text-sm text-blue-700">
                Não armazenamos dados do seu cartão. Pagamento processado por gateway certificado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}