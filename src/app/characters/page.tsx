export default function Characters() {
  const characters = [
    { name: 'Fren', class: 'Bard', level: 25 },
    { name: 'Gall', class: 'Sword Master', level: 27 },
    { name: 'Zy', class: 'Fighter', level: 24 },
    // Add additional characters here...
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Characters</h1>
      <ul>
        {characters.map((char, index) => (
          <li key={index} className="mb-2">
            <div>{char.name}</div>
            <div>Class: {char.class}</div>
            <div>Level: {char.level}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
