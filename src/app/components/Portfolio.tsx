'use client'

import Image from 'next/image';

import Link from 'next/link';
import React from 'react';
import AppGestaoImage from '../../../public/images/Aplicativo_de_gestao.png';
import giroCertoImage from '../../../public/images/CORTE_FINAL_GIRO_CERTO.png';
import cryptoAppImage from '../../../public/images/CryptoApp Wallet.png';
import cryptoAppImageOriginal from '../../../public/images/CryptoApp WalletOriginal.png';
import ArtworkFiguresImage from '../../../public/images/ECOMMERCE_Action-Figures.png';
import ArtworkFiguresImageOriginal from '../../../public/images/ECOMMERCE_Action-FiguresOriginal.png';
import EcommerceVegaImage from '../../../public/images/ECOMMERCE_VEGA-SHOP.png';
import EcommerceVegaImageOriginal from '../../../public/images/ECOMMERCE_VEGA-SHOP_Original.png';
import logisticaImage from '../../../public/images/logistica.png';
import MultinvestImage from '../../../public/images/LP-MultiInvest.png';
import logisticaImageOriginal from '../../../public/images/LP_CARGO LOGISTICA.png';
import lpDalacoinImage from '../../../public/images/lp_DalaCoin.png';
import siteFreteRapidoImage from '../../../public/images/SITE_freterapido.png';
import siteFreteRapidoImageOriginal from '../../../public/images/SITE_freterapidoOriginal.png';
import OdontoCareImage from '../../../public/images/tela_sistema.png';


function Portfolio() {

  const [showModalFreteRapido, setShowModalFreteRapido] = React.useState(false);
  const [showModalCryptoWallet, setShowModalCryptoWallet] = React.useState(false);
  const [showModalGiroCerto, setShowModalGiroCerto] = React.useState(false);
  const [showModalAppGestao, setShowModalAppGestao] = React.useState(false);
  const [showModalOdontoCare, setShowModalOdontoCare] = React.useState(false);
  const [showModalArtworkFigures, setShowModalArtworkFigures] = React.useState(false);
  const [showModalEcommerceVega, setShowModalEcommerceVega] = React.useState(false);
  const [showModalMultiInvest, setShowModalMultiInvest] = React.useState(false);
  const [showModalDalaCoin, setShowModalDalaCoin] = React.useState(false);
  const [showModalLogistica, setShowModalLogistica] = React.useState(false);


  return (
    <section className=' sm:ml-[4rem] min-w-320 '  >

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
              <Image src={siteFreteRapidoImage} alt='siteFreteRapidoImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
            </div>
          </button>
          {showModalFreteRapido ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className=" relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalFreteRapido(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <Link href={'https://super-frete-rapido-site.vercel.app/'}>
                      <Image src={siteFreteRapidoImageOriginal} alt='siteFreteRapidoImageOriginal' className='sm:pt-[50rem] sm2:pt-[51rem] sm3:pt-[54rem] sm4:pt-[58rem] sm5:pt-[63rem] md:pt-[147rem] lg:mt-[61rem] ' />
                    </Link>
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
              <Image src={giroCertoImage} alt='giroCertoImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                    <Image src={giroCertoImage} alt='giroCertoImage' />
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
              <Image src={cryptoAppImage} alt='cryptoAppImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                    <Image src={cryptoAppImageOriginal} alt='cryptoAppImageOriginal' />
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
              <Image src={AppGestaoImage} alt='AppGestaoImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                    <Image src={AppGestaoImage} alt='AppGestaoImage' />
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
              <Image src={OdontoCareImage} alt='OdontoCareImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                      <Image src={OdontoCareImage} alt='OdontoCareImage' className=' xl:mt-10 ' />
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

        {/*Artwork Figures*/}
        <>
          <button
            className=" ml-auto mr-auto text-white font-bold uppercase text-sm px-1 py-3 outline-none focus:outline-none mr-1 lg:mb-10 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModalArtworkFigures(true)}
          >
            <div className=' hover:scale-105 cursor-pointer '>
              <Image src={ArtworkFiguresImage} alt='ArtworkFiguresImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                      <Image src={ArtworkFiguresImageOriginal} alt='ArtworkFiguresImageOriginal' className=' xl:mt-[10rem] ' />
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
              <Image src={EcommerceVegaImage} alt='EcommerceVegaImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                    <Image src={EcommerceVegaImageOriginal} alt='EcommerceVegaImageOriginal' />
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
              <Image src={MultinvestImage} alt='MultinvestImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                    <Image src={MultinvestImage} alt='MultinvestImage' />
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
              <Image src={lpDalacoinImage} alt='lpDalacoinImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
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
                    <Image src={lpDalacoinImage} alt='lpDalacoinImage' />
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
              <Image src={logisticaImage} alt='logisticaImage' className='sm:w-[15rem] sm:h-[10rem] md:w-[30rem] md:h-[19.8rem] ' />
            </div>
          </button>
          {showModalLogistica ? (
            <>
              <div
                className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  focus:outline-none"
              >
                <div className="  relative w-auto my-10 mx-auto max-w-5xl">
                  {/*content*/}
                  <div className=" rounded-lg relative flex flex-col w-full outline-none focus:outline-none">
                    {/*header*/}
                    <div className=" flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModalLogistica(false)}
                      >
                      </button>
                    </div>
                    {/*body*/}
                    <Image src={logisticaImageOriginal} alt='logisticaImageOriginal' className='sm:pt-[35rem] sm2:pt-[42rem] sm3:pt-[45rem] sm4:pt-[48rem] sm5:pt-[50rem] md:pt-[121rem] lg:mt-[48rem] 2xl:mt-[36rem] ' />
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