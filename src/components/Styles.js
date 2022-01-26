import { StyleSheet } from "react-native";

export const stylesWeb = StyleSheet.create({
  ProfileLayout: {
    height: "100vh",
    backgroundColor: "silver",
    padding: "80px",
    columnCount: "2",
    columnWidth: "50%",
    display: "flex",
    flexDirection: "row",
    paddingTop: 120,
  },
  layout: {
    minHeight: "100vh",
    backgroundColor: "silver",
    padding: "40px",
    paddingTop: 120,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    maxWidth: 900,
  },
  profilePic: {
    height: 450,
    width: 450,
    alignSelf: "center",
    boxShadow: "4px 4px 12px black",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#082c45",
    paddingBottom: 20,
    textShadow: "4px 12px 11px rgb(85, 84, 84)",
  },
  body: {
    fontSize: 22,
    color: "#082c45d7",
    paddingBottom: 18,
  },
  column: {
    flex: "40%",
  },
  subheading: {
    fontSize: 30,
    fontWeight: "bold",
    paddingRight: 5,
  },
  subheadingCareer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#082c45d7",
    paddingBottom: 8,
  },
});

export const stylesMobile = StyleSheet.create({
  ProfileLayout: {
    minHeight: "100vh",
    backgroundColor: "silver",
    padding: "40px",
    paddingTop: 120,
  },
  layout: {
    minHeight: "100vh",
    backgroundColor: "silver",
    padding: 15,
    paddingTop: 120,
  },
  profilePic: {
    height: 300,
    width: 300,
    alignSelf: "center",
    boxShadow: "4px 4px 12px black",
    marginBottom: 20,
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#082c45",
    paddingBottom: 20,
  },
  body: {
    fontSize: 22,
    color: "#082c45d7",
    paddingBottom: 10,
  },
  subheading: {
    fontSize: 30,
    fontWeight: "bold",
    paddingBottom: 8,
  },
  subheadingCareer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#082c45d7",
    paddingBottom: 5,
  },
});
