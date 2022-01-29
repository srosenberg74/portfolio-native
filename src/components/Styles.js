import { StyleSheet } from "react-native";

export const stylesWeb = StyleSheet.create({
  ProfileLayout: {
    height: "100%",
    backgroundColor: "silver",
    padding: 80,
    display: "flex",
    flexDirection: "row",
    paddingTop: 70,
  },
  layout: {
    minHeight: "100%",
    backgroundColor: "silver",
    padding: 40,
    paddingTop: 70,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  content: {
    maxWidth: 900,
  },
  contactContent: {
    width: 600,
    borderRadius: 8,

    padding: 30,
  },
  profilePic: {
    height: 450,
    width: 450,
    alignSelf: "center",
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#082c45",
    paddingBottom: 20,
  },
  CareerHeading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#082c45",
    paddingBottom: 20,
  },
  body: {
    fontSize: 22,
    color: "#082c45d7",
    paddingBottom: 18,
  },
  column: {
    width: "50%",
  },
  subheading: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#082c45d7",
    paddingRight: 5,
  },
  subheadingCareer: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#082c45d7",
    paddingBottom: 8,
  },
  input: {
    width: 400,
    backgroundColor: "white",
    height: 26,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 4,
  },
  submit: {
    width: 80,
    backgroundColor: "#082c45",
    margin: 20,
    padding: 10,
    borderRadius: 4,
  },
  submitText: {
    color: "white",
    margin: "auto",
  },
  center: {
    margin: "auto",
  },
  Header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#082c45",
    width: "100%",
    color: "white",
    padding: 10,
    maxHeight: "100%",
  },
  HeaderTitle: {
    fontSize: 25,
    color: "white",
  },
  HeaderBar: {
    flexDirection: "row",
    backgroundColor: "#082c45",
    width: "100%",
    padding: 5,
    justifyContent: "space-around",
    marginBottom: 0,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 18,
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollView: {
    borderTopWidth: 2,
    borderColor: "#082c45",
    height: "70%",
  },
  navbar: {
    height: "10%",
    top: 0,
  },
  scrollContentContainer: {
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    backgroundColor: "silver",
  },
});

export const stylesMobile = StyleSheet.create({
  ProfileLayout: {
    minHeight: 800,
    backgroundColor: "silver",
    padding: 40,
    paddingTop: 30,
  },
  layout: {
    minHeight: 800,
    backgroundColor: "silver",
    padding: 15,
    paddingTop: 30,
  },
  profilePic: {
    height: 300,
    width: 300,
    alignSelf: "center",

    marginBottom: 20,
  },
  heading: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#082c45",
    paddingBottom: 20,
  },
  CareerHeading: {
    fontSize: 44,
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
  contactContent: {
    borderRadius: 8,

    padding: 30,
  },
  input: {
    width: 200,
    backgroundColor: "white",
    height: 26,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 4,
  },
  submit: {
    width: 80,
    backgroundColor: "#082c45",
    margin: 20,
    padding: 10,
    borderRadius: 4,
  },
  submitText: {
    color: "white",
    margin: "auto",
  },
  center: {
    margin: "auto",
  },
  Header: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#082c45",
    width: "100%",
    color: "white",
    padding: 10,
    paddingTop: 20,
  },
  HeaderTitle: {
    fontSize: 25,
    color: "white",
  },
  HeaderBar: {
    flexDirection: "row",
    backgroundColor: "#082c45",
    width: "100%",
    padding: 5,
    justifyContent: "space-around",
    marginBottom: 0,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    alignItems: "center",
    fontSize: 12,
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  scrollView: {
    borderTopWidth: 2,
    borderColor: "#082c45",
    height: "70%",
  },
  navbar: {
    height: "20%",
    top: 0,
  },
  scrollContentContainer: {
    justifyContent: "space-between",
  },
  main: {
    flex: 1,
    backgroundColor: "silver",
  },
});
