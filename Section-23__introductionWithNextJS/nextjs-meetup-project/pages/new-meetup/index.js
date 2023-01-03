// domain-name.com/new-meetup
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

const NewMeetUpPage = () => {
  const onAddMeetUpHandler = (enteredMeetUpData) => {
    console.log(enteredMeetUpData);
  };

  return <NewMeetUpForm onAddMeetup={onAddMeetUpHandler} />;
};

export default NewMeetUpPage;
