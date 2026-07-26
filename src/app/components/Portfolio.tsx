'use client'

import Image from 'next/image';

import Link from 'next/link';
import React from 'react';
import AppGestaoImage from '../../../public/images/Aplicativo_de_gestao.png';
import giroCertoImage from '../../../public/images/CORTE_FINAL_GIRO_CERTO.png';
import cryptoAppImageOriginal from '../../../public/images/CryptoApp WalletOriginal.png';
import ArtworkFiguresImage from '../../../public/images/ECOMMERCE_Action-Figures.png';
import ArtworkFiguresImageOriginal from '../../../public/images/ECOMMERCE_Action-FiguresOriginal.png';
import EcommerceVegaImageOriginal from '../../../public/images/ECOMMERCE_VEGA-SHOP_Original.png';
import logisticaImage from '../../../public/images/logistica.png';
import MultinvestImage from '../../../public/images/LP-MultiInvest.png';
import logisticaImageOriginal from '../../../public/images/LP_CARGO LOGISTICA.png';
import lpDalacoinImage from '../../../public/images/lp_DalaCoin.png';
import siteFreteRapidoImageOriginal from '../../../public/images/SITE_freterapidoOriginal.png';
import OdontoCareImage from '../../../public/images/tela_sistema.png';
import SAMImage from '../../../public/images/S.A.M-sistema_de_abastecimento.png';


function Portfolio() {

  const [showModalFreteRapido, setShowModalFreteRapido] = React.useState(false);
  const [showModalCryptoWallet, setShowModalCryptoWallet] = React.useState(false);
  const [showModalGiroCerto, setShowModalGiroCerto] = React.useState(false);
  const [showModalAppGestao, setShowModalAppGestao] = React.useState(false);
  const [showModalOdontoCare, setShowModalOdontoCare] = React.useState(false);
  const [showModalSAM, setShowModalSAM] = React.useState(false);
  const [showModalArtworkFigures, setShowModalArtworkFigures] = React.useState(false);
  const [showModalEcommerceVega, setShowModalEcommerceVega] = React.useState(false);
  const [showModalMultiInvest, setShowModalMultiInvest] = React.useState(false);
  const [showModalDalaCoin, setShowModalDalaCoin] = React.useState(false);
  const [showModalLogistica, setShowModalLogistica] = React.useState(false);

  const closeAllModals = React.useCallback(() => {
    setShowModalFreteRapido(false);
    setShowModalCryptoWallet(false);
    setShowModalGiroCerto(false);
    setShowModalAppGestao(false);
    setShowModalOdontoCare(false);
    setShowModalSAM(false);
    setShowModalArtworkFigures(false);
    setShowModalEcommerceVega(false);
    setShowModalMultiInvest(false);
    setShowModalDalaCoin(false);
    setShowModalLogistica(false);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeAllModals();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeAllModals]);

  return (
    <section id='portfolio' className=' sm:ml-[4rem] min-w-320 mt-[45rem] scroll-mt-24 '  >

      <h2 className=' text-center sm:mt-20 md:mt-[-50rem] xl:pl-[0.7%] font-bold text-3xl mb-20 bg-[#00FF80] '>PORTFOLIO</h2>

      <div className="  sm:flex sm:flex-col lg:grid grid-cols-3 gap-4">
        {/*Site Frete Rápido*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalFreteRapido(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={siteFreteRapidoImageOriginal}
                alt='siteFreteRapidoImage'
                className='h-[10rem] w-[15rem] rounded-lg object-cover sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalFreteRapido ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" relative w-auto my-10 mx-auto max-w-5xl bg-white">
                  {/*content*/}
                  <div className=" relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalFreteRapido(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="max-h-[80vh] overflow-y-auto px-4">
                      <Link href={'https://super-frete-rapido-site.vercel.app/'}>
                        <Image
                          src={siteFreteRapidoImageOriginal}
                          alt='siteFreteRapidoImageOriginal'
                          className='mx-auto h-auto w-auto max-w-full object-contain'
                        />
                      </Link>
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl bg-white text-center '>Site Super Frete Rápido</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalFreteRapido(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*App Giro Certo*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalGiroCerto(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={giroCertoImage}
                alt='giroCertoImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalGiroCerto ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalGiroCerto(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={giroCertoImage} alt='giroCertoImage' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl bg-white text-center '>App Giro Certo</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalGiroCerto(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*App Crypto-Wallet*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalCryptoWallet(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={cryptoAppImageOriginal}
                alt='cryptoAppImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalCryptoWallet ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalCryptoWallet(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={cryptoAppImageOriginal} alt='cryptoAppImageOriginal' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl text-center '>App Crypto Wallet</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalCryptoWallet(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*App Gestão*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalAppGestao(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={AppGestaoImage}
                alt='AppGestaoImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalAppGestao ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalAppGestao(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={AppGestaoImage} alt='AppGestaoImage' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalAppGestao(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*OdontoCare*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalOdontoCare(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={OdontoCareImage}
                alt='OdontoCareImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalOdontoCare ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalOdontoCare(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <Link href={'https://odonto-care-system.vercel.app/'} >
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={OdontoCareImage} alt='OdontoCareImage' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    </Link>
                    <h1 className=' pt-10 font-bold text-3xl bg-white text-center '>Sistema Odontológico de Atendimento e Gestão</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalOdontoCare(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*S.A.M*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalSAM(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={SAMImage}
                alt='SAMImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalSAM ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalSAM(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <Link href={'https://s-a-m-sistema-municipal-de-abasteci.vercel.app/'} >
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={SAMImage} alt='SAMImage' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    </Link>
                    <h1 className=' pt-10 font-bold text-3xl bg-white text-center '>Sistema de abastecimento da Farmácia Municipal</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalSAM(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*Artwork Figures*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalArtworkFigures(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={ArtworkFiguresImage}
                alt='ArtworkFiguresImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalArtworkFigures ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalArtworkFigures(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <Link href={'https://artwork-figures.vercel.app/'} >
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={ArtworkFiguresImageOriginal} alt='ArtworkFiguresImageOriginal' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    </Link>
                    <h1 className=' pt-10 font-bold text-3xl text-center '>Loja Virtual Artwork Figures</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalArtworkFigures(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*Ecommerce Vega*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalEcommerceVega(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={EcommerceVegaImageOriginal}
                alt='EcommerceVegaImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalEcommerceVega ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalEcommerceVega(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={EcommerceVegaImageOriginal} alt='EcommerceVegaImageOriginal' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl text-center '>Loja Virtual Vega Produtos Íntimos </h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalEcommerceVega(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/* Site Multinvest*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalMultiInvest(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={MultinvestImage}
                alt='MultinvestImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalMultiInvest ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalMultiInvest(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={MultinvestImage} alt='MultinvestImage' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl text-center '>Site de Investimento MultiInvest</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalMultiInvest(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/* Site DalaCoin*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalDalaCoin(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={lpDalacoinImage}
                alt='lpDalacoinImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalDalaCoin ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" bg-white relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg bg-white relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalDalaCoin(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="flex max-h-[78vh] justify-center overflow-hidden px-4">
                      <Image src={lpDalacoinImage} alt='lpDalacoinImage' className='h-auto w-auto max-h-[78vh] max-w-full object-contain' />
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl text-center '>Plataforma de Investimento em Criptomoedas DalaCoin</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalDalaCoin(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        {/*Site Logistica*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalLogistica(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image
                src={logisticaImage}
                alt='logisticaImage'
                className='h-[10rem] w-[15rem] rounded-lg bg-white object-contain sm:w-[15rem] md:h-[19.8rem] md:w-[30rem]'
              />
            </div>
          </button>
          {showModalLogistica ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className="  relative w-auto my-10 mx-auto max-w-5xl bg-white">
                  {/*content*/}
                  <div className=" rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalLogistica(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <div className="max-h-[80vh] overflow-y-auto px-4">
                      <Image
                        src={logisticaImageOriginal}
                        alt='logisticaImageOriginal'
                        className='mx-auto h-auto w-auto max-w-full object-contain'
                      />
                    </div>
                    <h1 className=' pt-10 font-bold text-3xl text-center bg-white '>Site Cargo Logística</h1>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 bg-white border-blueGray-200">
                      <button
                        className="text-red-500 font-bold uppercase px-1 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModalLogistica(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>


      </div>

    </section>
  )
}

export default Portfolio
