import React from 'react'
import Treeview from './Treeview'

const config = [
  { name: 'mohammad', parentName: null },
  { name: 'ali', parentName: 'mohammad' },
  { name: 'akbar', parentName: 'ali' },
  { name: 'nazanin', parentName: 'ali' },
  { name: 'zahra', parentName: 'akbar' }
]

const buildTree = (items, name = null, link = 'parentName') => {
  return (
    items
      .filter(item => item[link] === name)
      .map(item => ({ ...item, children: buildTree(items, item.name) }))
  )
}

const TreeviewLoader = () => {
  return (
    <Treeview items={ buildTree(config) } />
  )
}

export default TreeviewLoader
