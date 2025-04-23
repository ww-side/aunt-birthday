import { useState } from 'react';
import { Button } from './components/button';
import { BirthdayView } from './components/birthday-view.tsx';

export const App = () => {
  const [isBirthday, setIsBirthday] = useState(false);
  const [isWarning, setIsWarning] = useState(false);

  return (
    <main className="h-screen max-[1240px]:w-[90%] w-[60%] flex flex-col items-center text-center justify-center mx-auto">
      {isBirthday ? (
        <BirthdayView />
      ) : !isWarning ? (
        <section>
          <h1 className="text-5xl max-[1240px]:text-3xl font-medium">
            Your name is Olya and today is your birthday?
          </h1>
          <section className="flex items-center justify-center gap-5 mt-5">
            <Button variant="success" onClick={() => setIsBirthday(true)}>
              Yes
            </Button>
            <Button variant="danger" onClick={() => setIsWarning(true)}>
              No
            </Button>
          </section>
        </section>
      ) : (
        <section>
          <h1 className="text-5xl max-[1240px]:text-3xl font-medium">
            Either you're lying or you're messing with me. I know that your name
            is Olya and that it's your birthday.
          </h1>
          <div className="flex justify-center mt-5">
            <Button onClick={() => setIsBirthday(true)}>
              Correct the error (show a gift)
            </Button>
          </div>
        </section>
      )}
    </main>
  );
};
