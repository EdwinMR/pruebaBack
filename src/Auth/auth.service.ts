import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto, CreateUserDto } from './dto/index';
import { JwtPayload } from './interfaces';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private readonly userRepository: Model<User>,
    
    private readonly jwtService: JwtService
  ){}

  async create(createRegisterDto: CreateUserDto) {
    try{
      const user = (await this.userRepository.create( {...createRegisterDto, password: bcrypt.hashSync(createRegisterDto.password,10) } )).toJSON()
      return {
        token: this.getJwtToken({ email: user.email, role: user.role.toString() })
      };
    }catch(error){
      if(error.code == 11000){
        throw new BadRequestException( "Email Duplicate" );
      }
      throw new InternalServerErrorException('Server error');
    }
  }

  async login( loginUserDto: LoginUserDto ) {

    const { password, email } = loginUserDto;
    const user = (await this.userRepository.findOne({email}));
    if ( !user ) 
      throw new UnauthorizedException('email invalid');
      
    if ( !bcrypt.compareSync( password, user.password ) )
      throw new UnauthorizedException('password invalid');
    return {
      token: this.getJwtToken({ email: user.email, role: user.role.toString() })
    };
  }

  async getAll(){

  }

  private getJwtToken( payload: JwtPayload ) {
    const token = this.jwtService.sign( payload );
    return token;

  }
}
