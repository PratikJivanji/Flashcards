using Microsoft.EntityFrameworkCore;

namespace FlashcardAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<Flashcard> Flashcards { get; set; }
    }
}
