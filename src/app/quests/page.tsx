export default function Quests() {
  const quests = [
    { name: 'First SQL Quest', level: 1, description: 'Learn basic SQL syntax' },
    { name: 'Advanced SQL Quest', level: 10, description: 'Master JOIN operations' },
    // Add more quests here...
  ];

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Quests</h1>
      <ul>
        {quests.map((quest, index) => (
          <li key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{quest.name}</h2>
            <p>Required Level: {quest.level}</p>
            <p>{quest.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
