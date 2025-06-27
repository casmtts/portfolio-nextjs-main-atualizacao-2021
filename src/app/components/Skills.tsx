'use client'

import Image from 'next/image';

import { useTranslations } from 'next-intl';
import acessibilidadeIcon from '../../../public/images/acessibilidade.png';
import ansibleIcon from '../../../public/images/Ansible_logo.svg';
import awsIcon from '../../../public/images/aws.svg';
import bootstrap from '../../../public/images/bootstrap.svg';
import cssIcon from '../../../public/images/css3.svg';
import dockerIcon from '../../../public/images/docker.svg';
import expressIcon from '../../../public/images/express.svg';
import figmaIcon from '../../../public/images/figma.svg';
import firebaseIcon from '../../../public/images/firebase.svg';
import jenkinsIcon from '../../../public/images/free-jenkins-icon-download-in-svg-png-gif-file-formats--brand-company-logo-world-logos-vol-3-pack-icons-282385.webp';
import githubIcon from '../../../public/images/github.svg';
import gitlabIcon from '../../../public/images/gitlab_original_wordmark_logo_icon_146504.webp';
import googleCloudIcon from '../../../public/images/google-cloud.webp';
import herokuIcon from '../../../public/images/heroku.svg';
import hibernateIcon from '../../../public/images/hibernate.svg';
import html5Icon from '../../../public/images/html5.svg';
import javaIcon from '../../../public/images/java.svg';
import javascriptIcon from '../../../public/images/javascript.svg';
import jestIcon from '../../../public/images/jest.svg';
import jUnitIcon from '../../../public/images/JUnit.webp';
import kubernetesIcon from '../../../public/images/kubernetes-logo-1-1.svg';
import linuxIcon from '../../../public/images/linux.png';
import lucidchartIcon from '../../../public/images/lucidchart.webp';
import materialUi from '../../../public/images/material-ui.svg';
import materialDesign from '../../../public/images/materialDesign.svg';
import mavenIcon from '../../../public/images/maven.svg';
import mongodbIcon from '../../../public/images/mongodb.svg';
import mongooseIcon from '../../../public/images/mongoose.png';
import mysqlIcon from '../../../public/images/mysql.svg';
import nestJsIcon from '../../../public/images/nestjs.svg';
import nextjsIcon from '../../../public/images/nextjs-logo.svg';
import nodeIcon from '../../../public/images/node.svg';
import notionIcon from '../../../public/images/notion.svg';
import npmIcon from '../../../public/images/npm.svg';
import photoshopIcon from '../../../public/images/photoshop.png';
import postgresIcon from '../../../public/images/postgres.svg';
import postmanIcon from '../../../public/images/postman.svg';
import prismaIcon from '../../../public/images/prisma.svg';
import prototipacaoIcon from '../../../public/images/prototipacao.png';
import pythonIcon from '../../../public/images/python.png';
import reactIcon from '../../../public/images/react-js.svg';
import reactNativeIcon from '../../../public/images/react-native.svg';
import reduxIcon from '../../../public/images/redux.svg';
import restApiIcon from '../../../public/images/restApi.svg';
import sequelizeIcon from '../../../public/images/sequelize.svg';
import sonarQubeIcon from '../../../public/images/sonarqube.svg';
import swaggerIcon from '../../../public/images/swagger.svg';
import tailwindIcon from '../../../public/images/TailwindLogo.svg';
import typeormIcon from '../../../public/images/typeorm.svg';
import typescriptIcon from '../../../public/images/typescript.svg';
import usabilidadeIcon from '../../../public/images/usabilidade.png';
import vercelIcon from '../../../public/images/vercel.webp';
import yarnIcon from '../../../public/images/yarn.webp';

function Skills() {

  const t = useTranslations('skillsPage');

  return (
    <div className=' sm:ml-[4rem] lg:ml-[3.3%] xl:ml-[0%]  ' >

      <h2 className=' text-center md:pr-5 xl:pl-[0.7%] font-bold text-3xl mb-20 bg-[#00FF80] '>{t('title')}</h2>

      <h2 className=' font-bold text-2xl mb-20 text-center bg-[#f0f0f0] xl:ml-[0%] '>{t('frontEndTitle')}</h2>

      <div className=" mb-10 md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('htmlSubtitle')}
        ><Image src={html5Icon} alt='html5Icon' className=' sm:w-[80%] mx-auto pt-3 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('cssSubtitle')}
        ><Image src={cssIcon} alt='cssIcon' className=' sm:w-[60%] mx-auto pt-4 ' />
        </div>

        <div className=' sm:w-[10rem] sm:mx-auto md:mx-0 2xl:w-[10rem] 2xl:h-[10rem] hover:scale-110 cursor-pointer '
          title={t('jsSubtitle')}
        ><Image src={javascriptIcon} alt='javascriptIcon' className=' 2xl:w-[12rem] 2xl:h-[12rem] mx-auto ' />
        </div>

        <div className=' sm:w-[10rem] sm:mx-auto md:mx-0 2xl:w-[10rem] 2xl:h-[10rem] hover:scale-110 cursor-pointer '
          title={t('typescriptSubtitle')}
        ><Image src={typescriptIcon} alt='typescriptIcon' className=' 2xl:w-[12rem] 2xl:h-[12rem] mx-auto' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('reduxSubtitle')}
        ><Image src={reduxIcon} alt='reduxIcon' className=' sm:w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4 font-bold ' >Redux</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('reactSubtitle')}
        ><Image src={reactIcon} alt='reactIcon' className=' sm:w-[50%] mx-auto pt-7 ' />
          <h5 className='text-center pt-4 font-bold '>React</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('nextjsSubtitle')}
        ><Image src={nextjsIcon} alt='nextjsIcon' className=' sm:w-[80%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('tailwindSubtitle')}
        ><Image src={tailwindIcon} alt='tailwindIcon' className=' sm:w-[80%] mx-auto pt-[4.4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('bootstrapSubtitle')}
        ><Image src={bootstrap} alt='bootstrap' className='  w-[60%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4 font-bold '>Bootstrap</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('materialUiSubtitle')}
        ><Image src={materialUi} alt='materialUi' className=' sm:w-[60%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4 font-bold '>Material UI</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('materialDesignSubtitle')}
        ><Image src={materialDesign} alt='materialDesign' className=' sm:w-[50%] mx-auto pt-2 ' />
          <h5 className='text-center pt-4 font-bold '>Material Design</h5>
        </div>

      </div>


      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-80rem] xl:ml-[0%] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>{t('DatabaseEndTitle')}</h2>

      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('mysqlSubtitle')}
        ><Image src={mysqlIcon} alt='mysqlIcon' className=' w-[100%] mx-auto pt-10  ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('postgresSubtitle')}
        ><Image src={postgresIcon} alt='postgresIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('mongoSubtitle')}
        ><Image src={mongodbIcon} alt='mongodbIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('typeormSubtitle')}
        ><Image src={typeormIcon} alt='typeormIcon' className=' w-[50%] mx-auto pt-7 ' />
          <h5 className='text-center pt-4 font-bold '>Type ORM</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('prismaSubtitle')}
        ><Image src={prismaIcon} alt='prismaIcon' className=' w-[80%] mx-auto pt-12 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('sequelizeSubtitle')}
        ><Image src={sequelizeIcon} alt='sequelizeIcon' className=' w-[80%] mx-auto pt-12 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('mongooseSubtitle')}
        ><Image src={mongooseIcon} alt='mongooseIcon' className=' w-[100%] mx-auto pt-7 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('firebaseSubtitle')}
        ><Image src={firebaseIcon} alt='firebaseIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('hibernateSubtitle')}
        ><Image src={hibernateIcon} alt='hibernateIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>


      </div>

      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-80rem] xl:ml-[-0.5%] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>{t('backEndtitle')}</h2>

      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('apiSubtitle')}
        ><Image src={restApiIcon} alt='restApiIcon' className=' w-[50%] mx-auto pt-10  ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('nodeSubtitle')}
        ><Image src={nodeIcon} alt='nodeIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('expressSubtitle')}
        ><Image src={expressIcon} alt='expressIcon' className=' w-[100%] mx-auto pt-10  ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('nestjsSubtitle')}
        ><Image src={nestJsIcon} alt='nestJsIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('javaSubtitle')}
        ><Image src={javaIcon} alt='javaIcon' className=' w-[50%] mx-auto  ' />
        </div>

      </div>

      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-95rem] xl:ml-[0%] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>{t('mobileDevTitle')}</h2>


      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('reactNativeSubtitle')}
        ><Image src={reactNativeIcon} alt='reactNativeIcon' className=' w-[100%] mx-auto  ' />
        </div>

      </div>

      <h2 className=' font-bold text-2xl sm:mt-[5rem] md:mt-[-40rem] lg:mt-[-110rem] xl:ml-[0%] mb-20 text-center bg-[#f0f0f0] mt-[-85rem] '>{t('relatedTechTitle')}</h2>


      <div className=" sm:mt-[5rem] md:pl-[5.5rem] lg:pl-[5rem] lg:pb-[10rem] lg:pr-[5rem] xl:pl-[10rem] 2xl:pl-[10rem] 2xl:pr-[6rem] gap-20 sm:flex sm:flex-col md:grid grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 grid-rows-9 flex-wrap ">

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('acessibilitySubtitle')}
        ><Image src={prototipacaoIcon} alt='prototipacaoIcon' className=' w-[50%] mx-auto pt-5' />
          <h5 className='text-center pt-4' >{t('protoTitle')}</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('usabilitySubtitle')}
        ><Image src={usabilidadeIcon} alt='usabilidadeIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >{t('usabilityTitle')}</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('acessibilitySubtitle')}
        ><Image src={acessibilidadeIcon} alt='acessibilidadeIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >{t('acessibilityTitle')}</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('figmaSubtitle')}
        ><Image src={figmaIcon} alt='figmaIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Figma</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('githubSubtitle')}
        ><Image src={githubIcon} alt='githubIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Github</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('photoshopSubtitle')}
        ><Image src={photoshopIcon} alt='photoshopIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Photoshop</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('linuxSubtitle')}
        ><Image src={linuxIcon} alt='linuxIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('notionSubtitle')}
        ><Image src={notionIcon} alt='notionIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Notion</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('lucidchartSubtitle')} >
          <Image src={lucidchartIcon} alt='lucidchartIcon' className=' w-[100%] mx-auto pt-10 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('npmSubtitle')} >
          <Image src={npmIcon} alt='npmIcon' className=' w-[80%] mx-auto pt-10 ' />
        </div>

        <div className=' sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer bg-[#147bac] '
          title={t('yarnSubtitle')} >
          <Image src={yarnIcon} alt='yarnIcon' className=' w-[70%] mx-auto pt-5 ' />
          <h5 className='text-center text-white '>Yarn</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('jestSubtitle')} >
          <Image src={jestIcon} alt='jestIcon' className=' w-[50%] mx-auto pt-5 ' />
          <h5 className='text-center pt-4' >Jest</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('googleSubtitle')} >
          <Image src={googleCloudIcon} alt='googleCloudIcon' className=' w-[80%] mx-auto pt-[4.5rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('awsSubtitle')} >
          <Image src={awsIcon} alt='awsIcon' className=' w-[50%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('vercelSubtitle')} >
          <Image src={vercelIcon} alt='vercelIcon' className=' w-[90%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('herokuSubtitle')} >
          <Image src={herokuIcon} alt='herokuIcon' className=' w-[90%] mx-auto pt-[3rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('dockerSubtitle')} >
          <Image src={dockerIcon} alt='dockerIcon' className=' w-[90%] mx-auto pt-5 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('postmanSubtitle')} >
          <Image src={postmanIcon} alt='postmanIcon' className=' w-[90%] mx-auto pt-[3rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('jUnitSubtitle')} >
          <Image src={jUnitIcon} alt='jUnitIcon' className=' w-[90%] mx-auto pt-[3.5rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('mavenSubtitle')} >
          <Image src={mavenIcon} alt='mavenIcon' className=' w-[90%] mx-auto pt-2 ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('swaggerSubtitle')} >
          <Image src={swaggerIcon} alt='swaggerIcon' className=' w-[60%] mx-auto pt-5 ' />
          <h5 className='text-center pt-1 ' >Swagger</h5>
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('pythonSubtitle')} >
          <Image src={pythonIcon} alt='pythonIcon' className=' w-[60%] mx-auto pt-[4rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('ansibleSubtitle')} >
          <Image src={ansibleIcon} alt='ansibleIcon' className=' w-[60%] mx-auto pt-[1rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('gitlabSubtitle')} >
          <Image src={gitlabIcon} alt='gitlabIcon' className=' w-[60%] mx-auto pt-[1rem] ' />
        </div>

         <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('sonarQubeSubtitle')} >
          <Image src={sonarQubeIcon} alt='sonarQubeIcon' className=' w-[60%] mx-auto pt-[2rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('jenkinsSubtitle')} >
          <Image src={jenkinsIcon} alt='jenkinsIcon' className=' w-[60%] mx-auto pt-[2rem] ' />
        </div>

        <div className=' border-2 sm:w-[10rem] sm:mx-auto md:mx-0 w-[10rem] h-[10rem] hover:scale-110 cursor-pointer '
          title={t('kubernetesSubtitle')} >
          <Image src={kubernetesIcon} alt='kubernetesIcon' className=' w-[60%] mx-auto pt-[2rem] ' />
        </div>

      </div>

    </div>

  )
}

export default Skills