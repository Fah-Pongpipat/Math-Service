import { Body, Controller, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}

  @Post('sum')
  sum(@Body('numbers') numbers: number[]): number {
    return this.mathService.accumulate(numbers);
  }
}
