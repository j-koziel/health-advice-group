import { StaffProfileItem } from "../components/StaffProfileItem";
import { config } from "../settings/config";

export function AboutUs() {
  const staffData = [
    {
      name: "John",
      title: "Co-founder",
      profileImageUrl: `${config.backendUrl}/static/staff-profile-pictures/profile_pic_1.png`,
    },
    {
      name: "Amy",
      title: "Founder",
      profileImageUrl: `${config.backendUrl}/static/staff-profile-pictures/profile_pic_2.png`,
    },
    {
      name: "Esteban",
      title: "Co-founder",
      profileImageUrl: `${config.backendUrl}/static/staff-profile-pictures/profile_pic_3.png`,
    },
  ];

  return (
    <div className="w-full bg-background text-foreground flex flex-col text-center">
      <article className="flex flex-col mx-5">
        <header className="mb-4">
          <h1 className="text-7xl mb-2">About Us</h1>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in sem
            eu nunc pharetra lobortis at non neque. Vestibulum vitae erat ut
            sapien posuere suscipit. Sed et sapien odio.
          </p>
        </header>
        <main className="mb-4">
          <h2 className="font-bold text-3xl text-left">Our Mission:</h2>
          <p className="text-left text-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ex justo, vehicula ut lobortis non, rhoncus tempus velit. Fusce
            sollicitudin placerat blandit. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Aliquam erat volutpat. Curabitur a
            sodales dolor. Nulla ultricies, urna eu commodo malesuada, ipsum
            augue varius nisi, a tempus eros arcu non enim. In elementum dui in
            semper sagittis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Vestibulum tempus est
            eget purus sodales, aliquet gravida ex cursus. Etiam purus ante,
            laoreet a mollis quis, pulvinar et mi. Nullam vestibulum, metus quis
            aliquet imperdiet, velit erat feugiat risus, quis elementum nisl
            mauris nec ipsum. Pellentesque eu risus magna. Nam vel purus eu enim
            vulputate finibus pellentesque sit amet elit. Proin sodales risus
            lacus, at accumsan odio euismod faucibus. Aliquam bibendum, neque eu
            rhoncus iaculis, est turpis porta ante, et auctor tortor est in
            lacus. Praesent scelerisque, est sed aliquam vestibulum, est nulla
            tempor mauris, nec lacinia velit massa eget neque. Ut tempus cursus
            pulvinar. Praesent egestas tortor et sem luctus finibus. Proin nibh
            erat, luctus a commodo vel, congue sed urna. Phasellus mi arcu,
            mollis vehicula eleifend eu, lobortis sed ipsum. Vestibulum vehicula
            sapien sed pretium finibus. Ut ullamcorper leo sit amet viverra
            mollis. Mauris lorem ipsum, elementum non sem et, finibus ultrices
            nibh. Maecenas venenatis augue vitae urna interdum, nec commodo
            augue fermentum. Mauris dapibus ultricies elit quis pretium.
            Curabitur quis dui id lectus ultricies tempus non eget felis.
            Vivamus ultrices fermentum ultricies. Sed iaculis quis lacus a
            iaculis. Ut eget diam feugiat, cursus eros ac, posuere arcu. Donec
            rhoncus orci quis nibh consequat posuere. Pellentesque a suscipit
            massa. Sed finibus magna mauris, id ultricies ligula elementum at.
            Sed sollicitudin nulla eget neque sagittis tincidunt. Proin porta,
            neque id eleifend porttitor, lorem diam bibendum erat, in ultricies
            velit justo sed neque. Sed dapibus lacus vel volutpat feugiat.
          </p>
        </main>
        <footer className="flex flex-col gap-y-8 md:flex-row md:justify-evenly">
          {staffData.map((staffMember, i) => (
            <StaffProfileItem
              key={i}
              name={staffMember.name}
              title={staffMember.title}
              profileImageUrl={staffMember.profileImageUrl}
            />
          ))}
        </footer>
      </article>
    </div>
  );
}
