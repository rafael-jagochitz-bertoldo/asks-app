import React from 'react'

export default function AskLists() {
  const asksList = [
    {
      id: "1",
      content: "teste",
      status: "pending",
      subject: "POO",
      facilitator: "Rafael",
      student: "Jardel",
      created_at: new Date().toLocaleDateString()
    },
    {
      id: "2",
      content: "teste2",
      status: "pending",
      subject: "métodos",
      facilitator: "Jardel",
      student: "Rafael",
      created_at: new Date().toLocaleDateString()
    },
    {
      id: "3",
      content: "teste3",
      status: "pending",
      subject: "API",
      facilitator: "Nicole",
      student: "Mia",
      created_at: new Date().toLocaleDateString()
    },
    {
      id: "4",
      content: "teste4",
      status: "pending",
      subject: "programação funcional",
      facilitator: "Mia",
      student: "Nicole",
      created_at: new Date().toLocaleDateString()
    },
    {
      id: "5",
      content: "teste5",
      status: "pending",
      subject: "CSS",
      facilitator: "Caique",
      student: "Jão",
      created_at: new Date().toLocaleDateString()
    },
    {
      id: "6",
      content: "teste6",
      status: "pending",
      subject: "CodeWars",
      facilitator: "Jão",
      student: "Caique",
      created_at: new Date().toLocaleDateString()
    }
  ]

  // começar a codar a parte onde são listadas as perguntas
  return (
    <div>AskLists</div>
  )
}
