using System.ComponentModel.DataAnnotations;

namespace FlashcardAPI
{
    public class Flashcard
    {
        public int Id { get; set; } 

        [StringLength(100)]
        public string Question { get; set; } = string.Empty;

        [StringLength(100)]
        public string Answer { get; set; } = String.Empty;
    }
}
