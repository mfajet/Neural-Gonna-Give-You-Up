import midi
import preprocess

pattern = midi.read_midifile('rick_astley-never_gonna_give_you_up.mid')
new_pattern=midi.Pattern()
for track in pattern:
    notes, vocab, vocab_reverse = preprocess.preprocess_track(track)
    b = preprocess.events_to_midi([vocab_reverse[t] for t in notes],pattern.resolution)
    new_pattern.append(b[0])
new_pattern.resolution=pattern.resolution
midi.write_midifile("redone.mid", new_pattern)
