import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps) => (
  <>
    <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
      <h1>Detail for {user.name}</h1>
    </div>
    <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
      <p>ID: {user.id}</p>
    </div>
  </>
)

export default ListDetail
