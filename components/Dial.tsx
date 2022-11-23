
interface IDialProps {
  name: "knob_1" | "knob_2" | "knob_3" | "knob_4";
}

export default function Dial({name}: IDialProps) {

    return (
        <section class="dial">
            <input id={`${name}_1`} type="radio" name={name} value="A" />
            <label for={`${name}_1`} class="dial-label--1">A</label>

            <input id={`${name}_2`} type="radio" name={name} value="B" />
            <label for={`${name}_2`} class="dial-label--2">B</label>

            <input id={`${name}_3`} type="radio" name={name} value="C" />
            <label for={`${name}_3`} class="dial-label--3">C</label>

            <input id={`${name}_4`} type="radio" name={name} value="D" />
            <label for={`${name}_4`} class="dial-label--4">D</label>

            <input id={`${name}_5`} type="radio" name={name} value="E" />
            <label for={`${name}_5`} class="dial-label--5">E</label>

            <input id={`${name}_6`} type="radio" name={name} value="K" />
            <label for={`${name}_6`} class="dial-label--6">K</label>

            <input id={`${name}_7`} type="radio" name={name} value="G" />
            <label for={`${name}_7`} class="dial-label--7">G</label>

            <input id={`${name}_8`} type="radio" name={name} value="H" />
            <label for={`${name}_8`} class="dial-label--8">H</label>
        </section>
  );
}
