import { multipleJuxtData } from '../helpers/multipleJuxtData'

describe('multipleJuxtData', () => {
  it('gets different complex bits of data from one data set using juxt', () => {
    const users = [
      {
        id: 1,
        name: 'Ahmed',
        department: 'marketing',
        score: 84,
        isActive: true,
        age: 21,
      },
      {
        id: 2,
        name: 'ahmed',
        department: 'marketing',
        score: 89,
        isActive: true,
        age: 9,
      },
      {
        id: 3,
        name: 'lex',
        department: 'accounting',
        score: 84,
        isActive: false,
        age: 41,
      },
      {
        id: 4,
        name: 'james',
        department: 'engineering',
        score: 64,
        isActive: false,
        age: 39,
      },
      {
        id: 5,
        name: 'Johnn',
        department: 'engineering',
        score: 46,
        isActive: true,
        age: 30,
      },
    ]

    const expected = {
      departmentCounts: { marketing: 2, accounting: 1, engineering: 2 },
      activeCount: 3,
      highestScore: 89,
      youngestUserId: 2,
      averageAge: 28,
      shortestName: 'lex',
    }

    const result = multipleJuxtData(users)

    expect(result).toEqual(expected)
  })
})
