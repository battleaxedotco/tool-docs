# String replacement
<Screenshot 
    url="/anubis/Anubis-panel.png" 
    alt="Anubis" 
    right
    width="230px" />
Customize exported file names with automatic date and time replacement.

This is admittedly a little on the nerd side but it doesn't have to be super complicated. 

<br />

### Recipes
Simply paste these into the Anubis file name field and you're done.
| Sequence  | Source name | Output |
|-----------|-------------|-------------|
| `%#-%Y_%m_%d_` | CompName | CompName-2021_09_10.mp4 |

### Supported conversion specifications:

| Sequence  | Description |
|-----------|-------------|
| `%#` | The original comp/sequence/timeline name |
| `%a` | (`Tue`) Abbreviated name of the day of the week |
| `%A` | (`Tuesday`) Full name of the day of the week |
| `%b` | (`Sep`) Abbreviated month name |
| `%B` | (`September`) Full month name |
| `%c` | (`Tuesday, 14 Sep 2021 20-37-01 GMT`) Preferred date and time (UTC) representation for the current locale  |
| `%C` | (`20` for the year 2021) Century number as a 2-digit integer |
| `%d` | Day of the month as a decimal number padded to 2 digits (range 01 to 31) |
| `%e` | Day of the month as a decimal number (range 1 to 31) |
| `%H` | (`16` for 4:00pm) Hour as a decimal number using a 24-hour clock (range 00 to 23). See also `%k` |
| `%I` | (`04` for 4:00pm/am) Hour as a decimal number using a 12-hour clock (range 01 to 12). See also `%l` |
| `%j` | (`257` for Sept 14) Day of the year as a decimal number (range 001 to 366) |
| `%k` | Hour as a decimal number using a 24-hour clock (range 0 to 23). See also `%H` |
| `%l` | Hour as a decimal number using a 12-hour clock (range 1 to 12). See also `%I` |
| `%m` | Month as a decimal number padded to 2 digits (range 01 to 12) |
| `%n` | Month as a decimal number (range 1 to 12) |
| `%M` | Minute as a decimal number (range 00 to 59) |
| `%p` | Either "AM" or "PM" according to the given time value. Noon is treated as "PM" and midnight as "AM" |
| `%P` | Like `%p` but in lowercase ("am" or "pm") |
| `%s` | Number of seconds since the Epoch, 1970-01-01 00:00:00 +0000 (UTC) |
| `%S` | Second as a decimal number (range 00 to 59) |
| `%u` | Day of the week as a decimal (range 1 to 7), Monday being 1. See also `%w` |
| `%w` | Day of the week as a decimal (range 0 to 6), Sunday being 0. See also `%u` |
| `%x` | (`Tuesday, September 14 2021`) Preferred date representation for the current locale without the time |
| `%X` | (`16-57-48` for 4:57:48pm) Preferred time representation for the current locale without the date |
| `%y` | (`21` for 2021) Year as a decimal number without a century (range 00 to 99) |
| `%Y` | (`2021` for 2021) Year as a decimal number including the century |
| `%z` | (`-0400`) The `+hhmm` or `-hhmm` numeric timezone (that is, the hour and minute offset from UTC) |
| `%Z` | (`16-57-48 GMT-0400`) Timezone name or abbreviation |

<!-- | `%G` | ISO 8601 week-based year with century as a decimal number. The 4-digit year corresponds to the ISO week number (see `%V`). This has the same format and value as `%Y`, except that if the ISO week number belongs to the previous or next year, that year is used instead |
| `%g` | Like `%G`, but without century, that is, with a 2-digit year (00-99) | -->