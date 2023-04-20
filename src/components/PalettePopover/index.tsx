import { Palette, X } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import { InputRadioColor, InputColorContainer, PopoverArrow, PopoverClose, PopoverContentContainer, PopoverTrigger } from "./style";
import { SwitchTheme } from "./components/SwitchTheme";
import { useAtom } from "jotai";
import { primaryColorAtom } from "@/App";
import { ChangeEvent } from "react";

import * as RadioGroup from '@radix-ui/react-radio-group';
import * as Popover from '@radix-ui/react-popover';

export function PalettePopover() {

  const theme = useTheme();
  const [primaryColorOfChoice, setPrimaryColorOfChoice] = useAtom(primaryColorAtom);

  function handleColorOfChoiceChange(value: string) {
    setPrimaryColorOfChoice(value);
    localStorage.setItem('@githublog-primaryColor-v1', value);
  }

  return (
    <Popover.Root>
      <PopoverTrigger asChild>
        <button>
          <Palette size={20} color={theme.primary} weight="duotone" />
        </button>
      </PopoverTrigger>
      <Popover.Portal>
        <PopoverContentContainer sideOffset={5}>
          <h3>Tema</h3>
          <RadioGroup.Root defaultValue={primaryColorOfChoice} onValueChange={handleColorOfChoiceChange}>
            <InputColorContainer>
              <InputRadioColor value={"#3294F8"}>
                <RadioGroup.Indicator />
              </InputRadioColor>
              <InputRadioColor value={"#ee7626"}>
                <RadioGroup.Indicator />
              </InputRadioColor>
              <InputRadioColor value={"#12c25b"}>
                <RadioGroup.Indicator />
              </InputRadioColor>
              <InputRadioColor value={"#ee2641"}>
                <RadioGroup.Indicator />
              </InputRadioColor>
            </InputColorContainer>
          </RadioGroup.Root>
          <SwitchTheme />
          <PopoverClose asChild aria-label="Close">
            <button>
              <X size={18} color={theme.primary} weight="regular" />
            </button>
          </PopoverClose>
          <PopoverArrow />
        </PopoverContentContainer>
      </Popover.Portal>
    </Popover.Root>
  )
}