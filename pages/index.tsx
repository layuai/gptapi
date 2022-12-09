import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GPTAPI By GPT</title>
        <meta name="description" content="Generated by GPTAPI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          无需 token  GPTAPI  V1
        </h1>

        <h1 className={styles.title}>
          无需注册体验: <a href="https://chat.bygpt.com">Chat By GPT</a>
        </h1>

        <h1 className={styles.title}>
          github: <a href="https://github.com/wsdo/gptapi">https://github.com/wsdo/gptapi</a>
        </h1>

        <p className={styles.description}>
          由 GPT API{' '} 强力驱动：  <a href="https://gptapi.cn">https://gptapi.cn</a>
          <code className={styles.code}>By GPT</code>
        </p>

        <p className={styles.description}>
          curl 使用方式：

          <code className={styles.code}>{`
          curl --location --request POST 'https://v1.gptapi.cn' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message":"讲个笑话"
}'
          `}</code>
        </p>
        <p className={styles.description}>
          axios 使用方式：

          <code className={styles.code}>{`
var axios = require('axios');
var data = JSON.stringify({
   "message": "讲个笑话"
});

var config = {
   method: 'post',
   url: 'https://v1.gptapi.cn',
   headers: { 
      'Content-Type': 'application/json', 
      'Content-Length': ''
   },
   data : data
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});
          `}</code>
        </p>





        <p className={styles.description}>
          OpenAI is a research institute focused on advancing artificial intelligence in a responsible way. It was founded in 2015 by a group of prominent researchers, including Elon Musk and Sam Altman, with the goal of promoting and developing friendly AI. OpenAI conducts research in a variety of areas, including machine learning, robotics, and economics. Its work has resulted in several notable achievements, such as the development of the GPT-3 language model and the creation of the Dota 2 AI agent OpenAI Five.
        </p>
        <p className={styles.description}>
          {' '}
          OpenAI是一家致力于以负责任的方式推进人工智能的研究机构。它由埃隆·马斯克和山姆·奥特曼等一批杰出的研究人员于2015年创立，旨在推广和开发友好的人工智能。OpenAI在多个领域开展研究，包括机器学习、机器人和经济学。它的工作已经取得了一些显著的成就，例如GPT-3语言模型的开发和Dota 2 AI代理OpenAI Five的创建。
        </p>
        <p className={styles.description}>
          {' '}
          OpenAI developed a language model called GPT-3, which is also known as OpenGPT. GPT-3 is a neural network-based language model that uses machine learning techniques to generate human-like text. It is one of the largest and most powerful language models ever created, with 175 billion parameters. GPT-3 has been used for a variety of natural language processing tasks, such as language translation and text summarization.
        </p>
        <p className={styles.description}>
          {' '}
          OpenAI开发了一种名为GPT-3的语言模型，也称为OpenGPT。GPT-3是一种基于神经网络的语言模型，它使用机器学习技术生成类似人类的文本。它是有史以来最大、最强大的语言模型之一，拥有1750亿个参数。GPT-3已被用于各种自然语言处理任务，如语言翻译和文本摘要。
          谁创办了这个学院?
        </p>
        <p className={styles.description}>
          {' '}
          OpenAI was founded in 2015 by a group of prominent researchers and technology leaders,
          including Elon Musk, Sam Altman, Greg Brockman, John Schulman, and Ilya Sutskever.
          The institute was founded with the goal of advancing artificial intelligence in a responsible and safe manner,
          and has since become a leading research institute in the field of AI.
        </p>
        <p className={styles.description}>
          {' '}
          OpenAI由一群杰出的研究人员和技术领袖于2015年创立，
          包括埃隆·马斯克、山姆·奥特曼、格雷格·布罗克曼、约翰·舒尔曼和伊利亚·萨茨克弗。
          该研究所的成立旨在以负责任和安全的方式推进人工智能，
          并已成为人工智能领域的领先研究机构。
          <code className={styles.code}>By GPT</code>
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            由 GPT API{' '} 强力驱动：  <a href="https://gptapi.cn">https://gptapi.cn</a>
          </span>
        </a>
      </footer>
    </div>
  )
}
