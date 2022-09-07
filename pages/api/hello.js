// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    { name: 'John Doe', id: '1', profession: 'Artist' },
    { name: 'Jenny Doe', id: '2', profession: 'Art Collector' },
    { name: 'Emma Jane', id: '3', profession: 'Mutant' },
    { name: 'Jean Miller', id: '4', profession: 'Scientist' },
  ])
}
