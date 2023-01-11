// domain-name.com/new-meetup
import { useRouter } from "next/router";
import NewMeetUpForm from "../../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  const router = useRouter();

  async function onAddMeetUpHandler(enteredMeetUpData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetUpData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  }

  return <NewMeetUpForm onAddMeetup={onAddMeetUpHandler} />;
}

export default NewMeetUpPage;
