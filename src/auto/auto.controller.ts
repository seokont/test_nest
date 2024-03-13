import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  Inject,UseFilters 
} from '@nestjs/common';
import { AutosService } from './auto.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { ApiTags } from '@nestjs/swagger';
import { CustomValidationPipe } from './pipes/customValidationPipe';
import { MyLoggerService } from 'src/logger/logger';


@ApiTags('Auto')
@Controller('autos')

export class AutosController {
  constructor(
    private readonly autosService: AutosService,
    @Inject(MyLoggerService) private readonly logger: MyLoggerService,
  ) {}

  @Post()
  async create(@Body(CustomValidationPipe) createAutoDto: CreateAutoDto) {
    return await this.autosService.create(createAutoDto);
  }

  @Get()
  async findAll() {
    this.logger.log('GET-api');
    return await this.autosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.autosService.findOne(+id);
  }

  @Patch(':id')
 async update(
    @Param('id') id: string,
    @Body(CustomValidationPipe) updateAutoDto: UpdateAutoDto,
  ) {
    return await this.autosService.update(+id, updateAutoDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.autosService.remove(+id);
  }
}
