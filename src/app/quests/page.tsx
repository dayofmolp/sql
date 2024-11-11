const quests = [
  { title: 'Complete Basic SQL Queries', description: 'Learn and execute basic SELECT queries.', status: 'In Progress' },
  { title: 'Deploy a Cloud Service', description: 'Set up and deploy a basic cloud service.', status: 'Not Started' },
  // Add more quests here
];

export default function Quests() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Quests</h1>
      <ul>
        {quests.map((quest, index) => (
          <li key={index} className="border-b py-2">
            <strong>{quest.title}</strong> - {quest.description} <span className="italic">({quest.status})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
