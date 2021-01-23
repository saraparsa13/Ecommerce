import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import TreeView from "@material-ui/lab/TreeView"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import TreeItem from "@material-ui/lab/TreeItem"

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400
  }
})

const Treeview = (props) => {
  const { items } = props
  const classes = useStyles()

  const renderTree = (nodes) => {
    return (
      <TreeItem nodeId={nodes.name} label={nodes.name}>
        {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
      </TreeItem>
    )
  }

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ArrowLeftIcon fontSize="small" />}
    >
      {renderTree(items[0])}
    </TreeView>
  );
}

export default Treeview
