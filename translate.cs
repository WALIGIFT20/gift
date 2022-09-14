using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;


namespace translate
{
    class Program
    {
      static void Main(string[] args)
      {
      Console.WriteLine("Enter a sentence:");
      string sentence = Console.ReadLine();
      string pigLatin = PigLatin(sentence);
      Console.WriteLine(pigLatin);
      
      }
       static string PigLatin (string sentence)
        {
            
            const string vowels = "AEIOUaeio";
            List<string> pigWords = new List<string>();

            foreach (string word in sentence.Split(' '))
            {
                string firstLetter = word.Substring(0, 1);
                string restOfWord = word.Substring(1, word.Length - 1);
                int currentLetter = vowels.IndexOf(firstLetter);

                if (currentLetter == -1)
                {
                    pigWords.Add(restOfWord + firstLetter + "ay");
                }
                else
                {
                    pigWords.Add(word + "ay");
                }
            }
            return string.Join(" ", pigWords);
        }
    }
}
