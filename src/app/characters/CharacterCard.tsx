export default function CharacterCard({ name, level, role }: CharacterCardProps) {
  return (
    <div className="bg-gray-700 rounded-lg p-6 shadow-md transform transition duration-300 hover:scale-105 hover:bg-gray-600">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-sm">Level: {level}</p>
      <p className="text-lg font-semibold">{role}</p>
    </div>
  );
}
