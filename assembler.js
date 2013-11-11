// msp430 single line assembler

// convert emulated instruction to its actual equivalent
function getActualInstructionFromEmulated(emulatedInstr)
{
	var instr = '';

	
}

// return true if the instruction is emulated
function isEmulatedInstruction(instr)
{

}

function getInstructionType(opcode)
{
	var instrType = '';

	opcode = opcode.toLowerCase();

	switch(opcode)
	{
		case 'rrc':
		case 'swpb':
		case 'rra':
		case 'sxt':
		case 'push':
		case 'call':
		case 'reti':
			instrType = 'single';
			break;
		case 'jne':
		case 'jnz':
		case 'jeq':
		case 'jz':
		case 'jnc':
		case 'jlo':
		case 'jc':
		case 'jhs':
		case 'jn':
		case 'jge':
		case 'jl':
		case 'jmp':
				instrType = 'jump';
				break;
		case 'mov':
		case 'add':
		case 'addc':
		case 'subc':
		case 'sub':
		case 'cmp':
		case 'dadd':
		case 'bit':
		case 'bic':
		case 'bis':
		case 'xor':
		case 'and':
			instrType = 'double';
			break;
	}

	return instrType;
}

function assembleInstruction(instruction)
{

	var splitInstruction = instruction.split(' ');

	var splitOpcode = splitInstruction[0].split('.');

	if (isEmulatedInstruction(splitOpcode[0])
			instruction = getActualInstructionFromEmulated(instruction);

	switch(getInstructionType(splitOpcode[0]))
	{
		case 'single':
			console.log('single');
			break;
		case 'double':
			console.log('double');
			break;
		case 'jump':
			console.log('jump');
			break;
		default:
			console.log('invalid instruction!');
	}
}

// tests

assembleInstruction('mov.b r10, r9');
assembleInstruction('swpb r10');
assembleInstruction('nop');
