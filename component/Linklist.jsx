import React from 'react'

export default function Linklist() {
  return (
    <div style={
        {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            listStyle: "none",
            padding: "0",
            margin: "0",
            gap: "10px",
        }
    }>
        <ul className="li">Link1</ul>
        <ul className="li">Link2</ul>
        <ul className="li">Link3</ul>
        <ul className="li">Link4</ul>
        <ul className="li">Link5</ul>
    </div>

  )
}
