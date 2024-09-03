import { Body, Controller, Logger, Post } from '@nestjs/common';
import { MathService } from './math.service';

@Controller('math')
export class MathController {
  constructor(private readonly mathService: MathService) {}
  private logger = new Logger();

  @Post('sum')
  sum(@Body('numbers') numbers: number[]): number {
    this.logger.log('Sum: ' + numbers);
    return this.mathService.accumulate(numbers);
  }
}
