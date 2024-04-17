import React from 'react'
import Accordion from './Accordion'

const FAQ = [
    {
        "question": "What is cryptocurrency?",
        "answer": "Cryptocurrency is a digital or virtual form of currency that uses cryptography for security and operates independently of a central authority, such as a bank. Examples include Bitcoin, Ethereum, and Litecoin."
    },
    {
        "question": "How do I buy cryptocurrencies?",
        "answer": "You can buy cryptocurrencies through online exchanges, peer-to-peer platforms, or cryptocurrency ATMs. You'll typically need to create an account on an exchange, verify your identity, and then you can purchase cryptocurrencies using fiat currency or other cryptocurrencies."
    },
    {
        "question": "What is a blockchain?",
        "answer": "A blockchain is a decentralized and distributed digital ledger that records transactions across a network of computers. Each block in the chain contains a number of transactions, and once recorded, the data in any given block cannot be altered without the alteration of all subsequent blocks."
    },
    {
        "question": "How do I secure my cryptocurrency holdings?",
        "answer": "To secure your cryptocurrency holdings, use a combination of secure wallets (hardware, software, or paper wallets), enable two-factor authentication on your exchange and wallet accounts, regularly update your software, and be cautious of phishing attempts and scams."
    }
]


const AccordionSection = () => {
  return (
    <div className="container mx-auto py-8">
      {FAQ.map((item) => (
        <Accordion title={item.question}>
            <p>{item.answer}</p>
        </Accordion>
      ))}
    </div>
  )
}

export default AccordionSection