import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Le_Louvre_-_Aile_Richelieu.jpg/800px-Le_Louvre_-_Aile_Richelieu.jpg",
    address: "Musée du Louvre (Paris, France)",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    Image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2018_01_%28Blue%29_-_Chaouen.jpg/1024px-2018_01_%28Blue%29_-_Chaouen.jpg",
    address: "Chefchaouen, Marrakesh, Morocco",
    description: "This is a second meetup",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
