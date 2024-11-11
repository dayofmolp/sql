interface CharacterCardProps {
  name: string;
  level: number;
  role: string;
}

export default function CharacterCard({ name, level, role }: CharacterCardProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-6 shadow-md">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm">Level: {level}</p>
      <p className="text-lg font-semibold">{role}</p>
    </div>
  );
}
