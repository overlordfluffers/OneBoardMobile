import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
  app: {
    alignItems: "center",
    backgroundColor:"#dadada",
    flex: 1,
    justifyContent: "flex-start",
  },
  topbar:{
    backgroundColor:"#204969",
    color: 'white',
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  userName:{
    color:"#dadada",
    fontWeight:"bold",
    fontSize:18,
    marginLeft:16
  },
  buttonSmall:{
    textAlign:"left",
    color:"#08ffc8",
    fontSize: 12,
    padding: 8,
    marginLeft: 8
  },
  post: {
    backgroundColor: "white",
    // border-bottom: #9a9a9a solid 2px,
    // border-top: #9a9a9a solid 2px,
    color: "black",
    marginBottom: 4,
    overflow:'scroll',
    padding:4,
    width: Dimensions.get('window').width,
  },
  postUser:{
    fontSize: 12,
    color: "#CA5353",
  },
  content:{
    margin: 8,
  },
  createdAt: {
    fontSize: 9,
  },
  inputBar:{
    display: 'flex',
    flexDirection: "row"
  },
  input:{
    width:Dimensions.get('window').width*.8,
    height:35,
    padding:8,
    backgroundColor:"white",
  },
  postButton:{
    display:'flex',
    flex:1,
    width:Dimensions.get('window').width*.2,
    backgroundColor:"#204969",
    color:"white",
    height:35,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop:8
  }
})