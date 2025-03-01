import seedUsers from './user-seeds.js';
import seedTickets from './ticket-seeds.js';

const seedDatabase = async () => {
  await seedUsers();
  await seedTickets();
  console.log('Database seeded successfully!');
};

seedDatabase().catch((error) => {
  console.error('Error seeding database:', error);
});
